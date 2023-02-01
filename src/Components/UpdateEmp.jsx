import React, { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "./Services/Services";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateEmp() {
  const { id } = useParams(); // array destructing used to get the id value from the url
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getEmployeeById(id).then((responses) => {
          setEmployee(responses.data);
        });
        console.log("this is the data Fetched", employee);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log("this is the data Fetched", employee);

  
  const handleCancel = () => {
    navigate("/");
  };

  const handleOnchange = (e) => {
    e.preventDefault();
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working this part");
    await updateEmployee(employee, id);
    navigate("/");
  };
  return (
    <div className=" flex flex-col mx-auto w-[100%] md:w-[30%]   shadow-lg shadow-black/30 border-b mt-10 rounded-xl my-auto">
      <h1 className="text-center text-2xl font-semibold text-gray-800 mt-10">
        Update Employee
      </h1>
      <div className="mx-auto p-4 flex w-full">
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label className="mt-3 font-semibold" htmlFor="">
            First Name
          </label>
          <input
            onChange={handleOnchange}
            className="mt-3 py-3 rounded-lg px-1 border border-gray-200 "
            type="text"
            name="firstName"
            value={employee.firstName}
            placeholder="Enter First name"
          />
          <label className="mt-3 font-semibold" htmlFor="">
            Last Name
          </label>
          <input
            onChange={handleOnchange}
            className="mt-3 py-3 rounded-lg px-1 border border-gray-200 "
            type="text"
            name="lastName"
            value={employee.lastName}
            placeholder="Enter Last Name"
          />
          <label className="mt-3 font-semibold" htmlFor="">
            Email
          </label>
          <input
            onChange={handleOnchange}
            className="mt-3 py-3 rounded-lg px-1 border border-gray-200 "
            type="text"
            name="email"
            value={employee.email}
            placeholder="Enter Email"
          />
          <div className="flex space-x-3 mt-2">
            <button
              type="submit"
              className="text-lg py-2 px-6 rounded-md font-semibold text-white bg-green-400"
            >
              Update
            </button>
            <button
              onClick={handleCancel}
              className="text-lg py-2 px-6 rounded-md font-semibold text-white bg-red-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
