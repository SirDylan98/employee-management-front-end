import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  deleteEmp } from "./Services/Services";
import Employee from "./Employee";

export default function EmployeeList() {
  const baseUrlGetallEmp = "http://localhost:8080/all";
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // adding the is loading state to only render whend datat is done fetching and the async
      await axios.get(baseUrlGetallEmp).then((Response) => {
        setEmployees(Response.data);
      });
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("employee outside the useeffect ", employees);

  // since props are immutable we have to pass  change the state of the employees in the parent not in the child
  // there for we can pass  a function as a prop that function will be called from the child and executed by the parent which has access to the state
  const deleteEmployee = (e, id) => {
    e.preventDefault();
    deleteEmp(id).then((response) => {
      console.log("the Record has been deleted");
      console.log(response)
      setEmployees((prevEmp) => {
        return prevEmp.filter((employee) => employee.id !== id);// filtering out the deleted id to update the ui because of state change
      });
    });
  };

  return (
    <div className="w-[70%] flex flex-col mx-auto shadow-md">
      <div className="mt-10">
        <button
          onClick={() => navigate("/addemployee")}
          className=" bg-gray-800 ml-1 text-white py-2 px-6 rounded-md mt-2"
        >
          Add Employee
        </button>
      </div>
      <div className="w-full shadow-md  mt-4">
        <table className="w-full ">
          <thead className="bg-gray-100 rounded-lg">
            <tr className="uppercase font-semibold text-gray-600 py-3">
              <th className="w-24 tracking-wider px-3 py-3 text-left">
                First Name
              </th>
              <th className="w-24 tracking-wider px-3 py-3 text-left">
                Last Name
              </th>
              <th className=" w-44 tracking-wider px-3 py-3 text-left">
                @Email
              </th>
              <th className=" w-14 tracking-wider px-3 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>
          {/* table body */}
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee
                  key={employee.id}
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
