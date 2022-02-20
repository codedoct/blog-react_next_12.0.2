/*eslint-env node*/
const BASE_API_URL = `${process.env.BASE_API_URL}/api/${process.env.API_VERSION}`

// News
export const API_NEWS = {
  LIST: `${BASE_API_URL}/news`,
  DETAIL: (newsId) => `${BASE_API_URL}/news/${newsId}`
}
