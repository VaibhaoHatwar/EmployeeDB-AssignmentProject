import retoolApi from "../../common/apis/retoolApi"
import { GetAuthUsersAPIKey } from "../../common/apis/retoolApiKey"

// Login user
const login = async (userData) => {
  const response = await retoolApi.get(
    `/${GetAuthUsersAPIKey}/getusers?user_id=${userData.user_id}&password=${userData.password}`
  )

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
