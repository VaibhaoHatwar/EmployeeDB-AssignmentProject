import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getEmployeeDetail } from "../../features/employees/employeeSlice"
import Spinner from "../layout/Spinner"

const EmployeeDetail = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const { employees, isLoading, isError, message } = useSelector(
    (state) => state.employees
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getEmployeeDetail(id))
  }, [id, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <article className="container">
      <section className="my-4 text-center">
        <h1 className="Display-1 mb-2">Employee Details:</h1>
        <p className="lead">Welcome to employee details page.</p>
      </section>
      <section className="card col-md-8 mx-auto">
        {employees &&
          employees.map((item) => (
            <div key={item.id}>
              <div className="card-body">
                <h5 className="card-title display-6">
                  Name: {item.name ? item.name : ""}
                </h5>
                <p className="lead">Rating: {item.rating ? item.rating : ""}</p>
                <h6 className="card-subtitle mb-2 text-muted lead">
                  Card Company: {item.company ? item.company : ""}
                </h6>
                <p className="lead">
                  Interests: {item.interests ? item.interests : ""}
                </p>
                <a
                  href={item.view_more ? item.view_more : ""}
                  className="card-link"
                >
                  View more
                </a>
                <p className="lead">
                  Designation: {item.designation ? item.designation : ""}
                </p>
                <img src={item.company_logo ? item.company_logo : ""} alt="" />
                <p className="card-text lead">
                  Job description:
                  {item.job_description ? item.job_description : ""}
                </p>

                <p className="lead">
                  <Link to="/">Back To Home</Link>
                </p>
              </div>
            </div>
          ))}
      </section>
    </article>
  )
}

export default EmployeeDetail
