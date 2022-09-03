import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getEmployeeDetail } from "../../features/employees/employeeSlice"
import Spinner from "../layout/Spinner"

const EmployeeDetail = () => {
  const { id } = useParams()
  //     id	1
  // name	"Aigneis Whisker"
  // rating	"⭐️"
  // company	"Procter & Gamble"
  // interests	"Writing"
  // view_more	"https://www.dyndns.org"
  // designation	"Sales Engineer"
  // company_logo	"https://logo.clearbit.com/illinois.edu"
  // job_descripton	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  console.log(id)

  const dispatch = useDispatch()

  // const { employees, isLoading, isError, message } = useSelector(
  //   (state) => state.employees
  // )

  // const {
  //   name,
  //   rating,
  //   company,
  //   interests,
  //   view_more,
  //   designation,
  //   company_logo,
  //   job_description,
  // } = employees

  useEffect(() => {
    dispatch(getEmployeeDetail(id))
    console.log(getEmployeeDetail(id))
  }, [])

  // employees.map((item) => {
  //   console.log(item)
  // })
  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <div className="card col-md-8">
      {/* <div className="card-body">
        <h5 className="card-title">Name: {name ? name : ""}</h5>
        <p className="card-text">Rating: {rating ? rating : ""}</p>
        <h6 className="card-subtitle mb-2 text-muted">
          Card Company: {company ? company : ""}
        </h6>
        <p>Interests: {interests ? interests : ""}</p>
        <a href={view_more} className="card-link">
          View more
        </a>
        <p>Designation: {designation ? designation : ""}</p>
        <img src={company_logo} alt="" />
        <p className="card-text">Job description: {job_description}</p>
      </div> */}
    </div>
  )
}

export default EmployeeDetail
