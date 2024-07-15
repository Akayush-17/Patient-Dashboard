
import "./App.css";
import PatientDashboard from "./components/PatientDashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex w-full">
        <div className="w-1/5">

        <Sidebar />
        </div>
        <div className="w-4/5 bg-gray-200 ">
          <PatientDashboard/>
        </div>

      </div>
    </>
  );
}

export default App;
