import { useEffect, useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../../features/auth/authSlice"
import Spinner from "../layout/Spinner"

const Login = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  })

  const { user_id, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess && user.length) {
      navigate("/")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (password.length < 6) {
      toast.error("Password must be atleast 6 characters long")
    }

    if (!user_id || !password) {
      toast.error("All fields must be required.")
    }

    const userData = {
      user_id,
      password,
    }

    dispatch(login(userData))

    setFormData({
      user_id: "",
      password: "",
    })
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="container my-4">
      <section className="col-md-6 mx-auto text-center">
        <h1 className="fw-semibold">
          <FaSignInAlt className="me-2" />
          Login
        </h1>
        <p className="lead">Login to your account</p>
      </section>
      <section className="col-md-6 mx-auto">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="user-id" className="form-label lead">
              Enter your User ID
            </label>
            <input
              type="email"
              className="form-control"
              id="user-id"
              placeholder="User ID"
              name="user_id"
              value={user_id}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label lead">
              Enter your Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="m-2">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login
