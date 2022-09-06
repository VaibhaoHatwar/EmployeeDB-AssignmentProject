import { Formik } from "formik"
// import * as EmailValidator from "email-validator"
import * as Yup from "yup"
import { FaSignInAlt } from "react-icons/fa"

const LoginForm = () => {
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
            console.log("Submitting")
            console.log(values)
          }}
          validationSchema={Yup.object().shape({
            user_id: Yup.string().email().required("User ID is required"),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password is too short - should be 8 characgters minimum")
              .matches(
                /^[a-z0-9_]+$/i,
                "Invalid password. Must contain one number and one special character"
              ),
          })}
          // validate={(values) => {
          //   let errors = {}

          //   if (!values.user_id) {
          //     errors.user_id = "User ID is required"
          //   } else if (!EmailValidator.validate(values.user_id)) {
          //     errors.user_id = "Invalid User ID"
          //   }

          //   const passwordRegex = "/^[a-z0-9_]+$/i"

          //   if (!values.password) {
          //     errors.password = "Password is required"
          //   } else if (values.password < 8) {
          //     errors.password = "Password must be 8 characters long"
          //   } else if (!passwordRegex.test(values.password)) {
          //     errors.password =
          //       "Invalid password. Must contain one number and one special character"
          //   }
          // }
          // }
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
