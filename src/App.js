import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Login from "./components/auth/Login"
import EmployeeDetail from "./components/employee/EmployeeDetail"
import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
