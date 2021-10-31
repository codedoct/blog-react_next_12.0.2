/*eslint-env node*/
const BASE_API_URL = `${process.env.BASE_API_URL}/api`

// User
const BASE_USER_URL = 'auth'
export const API_USER = {
  LOGIN: `${BASE_API_URL}/${BASE_USER_URL}/customer/login`,
  LOGOUT: `${BASE_API_URL}/${BASE_USER_URL}/customer/logout`,
  PROFILE: `${BASE_API_URL}/${BASE_USER_URL}/customer/profile`
}
