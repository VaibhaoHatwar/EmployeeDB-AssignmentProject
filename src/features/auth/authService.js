import axios from "axios"

const API_URL = "https://retoolapi.dev/B13laa/"

// Login user
const login = async (userData) => {
  const response = await axios.get(API_URL + "getusers?", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem("user")
}

const authService = {
  login,
  logout,
}

export default authService
