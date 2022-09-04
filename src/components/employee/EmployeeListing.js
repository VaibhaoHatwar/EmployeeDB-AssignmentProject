import { Fragment, useEffect } from "react"
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
    if (isError) {
      console.log(message)
    }

    dispatch(getAllEmployees())
  }, [isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Fragment>
      {employees.length > 0 ? (
        <div className="row g-2">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      ) : (
        <h3>You have not set any employees</h3>
      )}
    </Fragment>
  )
}

export default EmployeeListing
