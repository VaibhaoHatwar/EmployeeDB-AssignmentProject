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
    localStorage.clear()
    navigate("/login")
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
          <ul className="navbar-nav ml-auto me-3  mb-2 mb-lg-0">
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
      </nav>
    </header>
  )
}

export default Header
