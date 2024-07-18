const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const interactionRoutes = require('./routes/InteractionRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes'); 
const chatRoutes = require('./routes/chatRoutes');
const { GoogleGenerativeAI } = require('@google/generative-ai');

require('dotenv').config();

const app = express();

app.use(cors());

const corsOptions = {
  origin: 'https://patient-dashboard-nty4.vercel.app',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', interactionRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes); 
app.use('/chat', chatRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
