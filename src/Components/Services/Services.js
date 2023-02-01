import axios from "axios";




export const saveEmployee = (employee) => {
  const baseUrl = "http://localhost:8080/save";
  axios.post(baseUrl, employee).then((response) => {
    console.log(response);

  })
  .catch((error) => {
    console.log(error);
  });
    
};

export const getEmployeeById=(id)=>{
  const url="http://localhost:8080/emp/"+id;
  return axios.get(url)

}
export const updateEmployee=(employee,id)=>{
  const url="http://localhost:8080/update/"+id;
  return axios.put(url,employee);
}

export const deleteEmp=(id)=>{
  const url="http://localhost:8080/delete/"+id;
  return axios.delete(url)
}

export const getAllEmployees=()=>{
  const baseUrlGetallEmp="http://localhost:8080/all"
   return axios.get(baseUrlGetallEmp)
}
