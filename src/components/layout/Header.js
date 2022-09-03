import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogoutHandler = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <header>
      <nav className="navbar navbar-light bg-primary bg-opacity-50">
        <div className="container-fluid">
          <Link
            className="navbar-brand bg-primary fw-bolder text-light px-2 rounded mb-1"
            to="/"
          >
            EmployeeDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {user ? (
                  <button
                    onClick={onLogoutHandler}
                    type="button"
                    className="btn btn-warning"
                    to="/login"
                  >
                    <FaSignInAlt className="me-1" />
                    Logout
                  </button>
                ) : (
                  <Link className="btn btn-primary" to="/login">
                    <FaSignInAlt className="me-1" /> Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
