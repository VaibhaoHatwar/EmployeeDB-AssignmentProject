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
        <p className="lead fw-semibold text-muted">See employee details here</p>
      </section>
      <section className="card border-primary border-opacity-50 col-md-8 mx-auto rounded-4">
        {employees &&
          employees.map((item) => (
            <div key={item.id}>
              <div className="card-body text-center">
                <h6 className="card-title fw-semibold display-6 my-2">
                  Name: {item.name ? item.name : ""}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted lead fw-semibold">
                  Card Company: {item.company ? item.company : ""}
                </h6>
                <p className="lead fw-semibold text-warning">
                  Designation: {item.designation ? item.designation : ""}
                </p>
                <p className="lead fw-semibold">
                  Interests: {item.interests ? item.interests : ""}
                </p>
                <p className="card-text lead fw-semibold">
                  Job description:
                  {item.job_description ? item.job_description : ""}
                </p>
                <p className="lead fw-semibold">
                  Rating: {item.rating ? item.rating : ""}
                </p>
                <img src={item.company_logo ? item.company_logo : ""} alt="" />
                <a
                  href={item.view_more ? item.view_more : ""}
                  className="card-link fw-semibold"
                >
                  View more
                </a>

                <span className="ms-2 fw-semibold">
                  <Link to="/">Back To Home</Link>
                </span>
              </div>
            </div>
          ))}
      </section>
    </article>
  )
}

export default EmployeeDetail
