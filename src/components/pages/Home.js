import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import EmployeeListing from "../employee/EmployeeListing"
import { reset } from "../../features/auth/authSlice"

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate("/login")
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, message, dispatch])

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
