import { API_AUTH } from '~/utils/api-url'
import { apiPostNonAuth, apiPostAuth } from '~/utils/api'
import { setCookie } from '~/utils/auth'

export const registerUser = async (data) => {
  try {
    await apiPostNonAuth(API_AUTH.REGISTER, data)
  } catch (error) {
    throw error.response
  }
}

export const loginUser = async (data) => {
  try {
    const response = await apiPostNonAuth(API_AUTH.LOGIN, data)
    setCookie('rn12_token', response.data.token.split(" ")[1])
  } catch (error) {
    throw error.response
  }
}

export const logoutUser = async () => {
  try {
    
    await apiPostAuth(API_AUTH.LOGOUT)
  } catch (error) {
    throw error.response
  }
}
