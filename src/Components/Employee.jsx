import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Employee({employee,deleteEmployee}) {
    const navigate= useNavigate();
    const editEmployee=(e,id)=>{
        e.preventDefault()
        navigate(`/update/${id}`)
      }
    
  return (
    
         <tr  className="border-b  ">
              <td>
                <div className=" text-left break-words  text-gray-500 text-md px-3 py-3">
                  {employee.firstName}
                </div>
              </td>
              <td>
                <div className=" text-left  break-words text-gray-500 text-md px-3 py-3">
                {employee.lastName}
                </div>
              </td>
              <td>
                <div className=" text-left  break-words text-gray-500 text-md px-3 py-3">
                {employee.email}
                </div>
              </td>
              <td>
                <div className=" flex justify-end">
                  <a
                    onClick={(e)=>{editEmployee(e,employee.id)}}
                    className="px-2 text-blue-700 hover:cursor-pointer hover:scale-105 duration-300 "
                    href="/"
                  >
                    edit
                  </a>
                  <a
                    onClick={(e)=>{deleteEmployee(e,employee.id)}}
                    className="px-2 text-red-600 hover:cursor-pointer hover:scale-105 duration-300  mx-1"
                    href="/"
                  >
                    delete
                  </a>
                </div>
              </td>
            </tr>
    
  )
}
