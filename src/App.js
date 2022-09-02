import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./components/auth/Login"
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
