import { Route, Routes } from "react-router-dom";
import AddEmployee from "./Components/AddEmployee";
import Navbar from "./Components/Navbar";
import EmployeeList from "./Components/EmployeeList";
import UpdateEmp from "./Components/UpdateEmp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        {/* Indicate for default path */}
        <Route index element={<EmployeeList />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/update/:id" element={<UpdateEmp/>}/>
      </Routes>
    </div>
  );
}

export default App;
