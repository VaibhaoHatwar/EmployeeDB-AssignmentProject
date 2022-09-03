import employeeApi from "../../common/apis/employeeApi"
import {
  EmployeeDetailAPIKey,
  GetEmployeesAPIKey,
} from "../../common/apis/employeeApiKey"

const getEmployees = async () => {
  const response = await employeeApi
    .get(
      `${GetEmployeesAPIKey}/getemployees
  `
    )
    .catch((error) => {
      console.log(error)
    })

  return response.data
}

const getEmployeeDetail = async (id) => {
  // const response = await axios.get(
  //   "https://retoolapi.dev/H2F0Ui/getemployedetail?id=" + id
  // )

  // return response.data
  const response = await employeeApi
    .get(
      `${EmployeeDetailAPIKey}/getemployees?id=${id}
  `
    )
    .catch((error) => {
      console.log(error)
    })

  return response.data
}

const employeeService = {
  getEmployees,
  getEmployeeDetail,
}

export default employeeService
