import { API_USER } from '~/utils/api-url'
import { apiPostNonAuth, apiGetAuth, apiPostAuth } from '~/utils/api'
import { logoutUser, setCookie } from '~/utils/auth'

export const userLogin = async (data) => {
  try {
    const response  = await apiPostNonAuth(API_USER.LOGIN, data)
    setCookie('lg_token', response.data.data.token)
  } catch (error) {
    throw error.response
  }
}

export const userLogout = async () => {
  try {
    await apiPostAuth(API_USER.LOGOUT)
    logoutUser()
  } catch (error) {
    logoutUser()
    throw error.response
  }
}

export const getProfile = async (dispatch) => {
  try {
    const response  = await apiGetAuth(API_USER.PROFILE)
    dispatch({ type: 'SET_PROFILE', payload: response.data.data })
  } catch (error) {
    throw error.response
  }
}
