/*eslint-env node*/
const BASE_API_URL = `${process.env.BASE_API_URL}/api/${process.env.API_VERSION}`

// Auth
const BASE_AUTH_URL = 'auth'
export const API_AUTH = {
  REGISTER: `${BASE_API_URL}/${BASE_AUTH_URL}/register`,
  LOGIN: `${BASE_API_URL}/${BASE_AUTH_URL}/login`,
  LOGOUT: `${BASE_API_URL}/${BASE_AUTH_URL}/logout`
}

// News
export const API_NEWS = {
  LIST: `${BASE_API_URL}/news`,
  DETAIL: (newsId) => `${BASE_API_URL}/news/${newsId}`
}
