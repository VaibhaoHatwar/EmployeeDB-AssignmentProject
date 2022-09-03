import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import EmployeeListing from "../employee/EmployeeListing"

const Home = () => {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user, navigate])

  return (
    <main className="container">
      <section className="my-4 text-center">
        <h1 className="Display-1 mb-2">Welcome User</h1>
        <p className="lead">Welcome to the Employee Directory</p>
      </section>
      <section>
        <EmployeeListing />
      </section>
    </main>
  )
}

export default Home
