import { useEffect } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { FaSignInAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../../features/auth/authSlice"
import Spinner from "../layout/Spinner"

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate("/")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

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
        <Formik
          initialValues={{ user_id: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting("Submitting")
            if (!user) {
              toast.error("Please enter correct credentials")
            }
            dispatch(login(values))
          }}
          validationSchema={Yup.object().shape({
            user_id: Yup.string().email().required("User ID is required"),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password is too short - should be 8 characgters minimum")
              .matches(
                /^[a-z0-9_]+$/i,
                "Invalid password. Password must contain atleast 1 number and 1 of this (!@#$%^&*_) special character"
              ),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmmitting,
              handleChange,
              handleSubmit,
              handleBlur,
            } = props

            return (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="user-id" className="form-label lead">
                    Enter your User ID
                  </label>
                  <input
                    type="email"
                    id="user-id"
                    placeholder="User ID"
                    name="user_id"
                    value={values.user_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.user_id && touched.user_id && "error"
                    }`}
                  />
                  {errors.user_id && touched.user_id && (
                    <div className="text-danger">{errors.user_id}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label lead">
                    Enter your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.password && touched.password && "error"
                    }`}
                  />
                  {errors.password && touched.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
                <div className="m-2">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            )
          }}
        </Formik>
      </section>
    </div>
  )
}

export default LoginForm
