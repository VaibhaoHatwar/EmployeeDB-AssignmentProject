import retoolApi from "../../common/apis/retoolApi"
import {
  EmployeeDetailAPIKey,
  GetEmployeesAPIKey,
} from "../../common/apis/retoolApiKey"

const getEmployees = async () => {
  const result = await retoolApi
    .get(
      `${GetEmployeesAPIKey}/getemployees
  `
    )
    .catch((error) => {
      console.log(error)
    })

  return result.data
}

const getEmployeeDetail = async (id) => {
  // return result.data
  const result = await retoolApi
    .get(
      `${EmployeeDetailAPIKey}/getemployedetail?id=${id}
  `
    )
    .catch((error) => {
      console.log(error)
    })

  return result.data
}

const employeeService = {
  getEmployees,
  getEmployeeDetail,
}

export default employeeService
