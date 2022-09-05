import retoolApi from "../../common/apis/retoolApi"
import { GetAuthUsersAPIKey } from "../../common/apis/retoolApiKey"

// Login user
const login = async (userData) => {
  let result = await retoolApi.get(
    `/${GetAuthUsersAPIKey}/getusers?user_id=${userData.user_id}&password=${userData.password}`
  )

  if (result.data[0].name) {
    localStorage.setItem("user", JSON.stringify(result.data))
  }

  return result.data
}

// Logout user
const logout = () => {
  localStorage.clear()
}

const authService = {
  login,
  logout,
}

export default authService
