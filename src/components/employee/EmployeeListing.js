import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllEmployees } from "../../features/employees/employeeSlice"
import Spinner from "../layout/Spinner"
import EmployeeCard from "./EmployeeCard"

const EmployeeListing = () => {
  const dispatch = useDispatch()

  const { employees, isLoading, isError, message } = useSelector(
    (state) => state.employees
  )

  useEffect(() => {
    dispatch(getAllEmployees())
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="row">
      {employees.length > 0 ? (
        <div className="mb-2">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      ) : (
        <h3>You have not set any employees</h3>
      )}
    </div>
  )
}

export default EmployeeListing
