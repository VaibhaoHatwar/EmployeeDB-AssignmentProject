import retoolApi from "../../common/apis/retoolApi"
import {
  EmployeeDetailAPIKey,
  GetEmployeesAPIKey,
} from "../../common/apis/retoolApiKey"

const getEmployees = async () => {
  const response = await retoolApi
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
  // return response.data
  const response = await retoolApi
    .get(
      `${EmployeeDetailAPIKey}/getemployedetail?id=${id}
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
