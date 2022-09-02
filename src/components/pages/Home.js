import React from "react"
import EmployeeList from "../employee/EmployeeList"

const Home = () => {
  return (
    <>
      <section className="container my-4 text-center">
        <h1 className="Display-1 mb-2">Welcome User</h1>
        <p className="lead">Welcome to the Employee Directory</p>
      </section>
      <section className="container">
        <EmployeeList />
      </section>
    </>
  )
}

export default Home
