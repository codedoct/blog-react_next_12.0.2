// import Router from 'next/router'
import * as Cookies from 'js-cookie'

export const setCookie = (key, cookie) => {
  console.log("masuk", key, cookie)
  Cookies.set(key, cookie, { path: '/' })
  return {
    key: Cookies.get(key)
  }
}

// export const getUserToken = () => {
//   return Cookies.get('rn12_token')
// }

// export const isLoginServer = (req) => {
//   const token = req.cookies ? req.cookies.rn12_token : null
//   if (token) {
//     return true
//   } 
//   return false
// }

// export const isLogin = () => {
//   const token = Cookies.get('rn12_token')
//   if (token) {
//     return true
//   } 
//   return false
// }

// export const logoutUser = () => {
//   Cookies.remove('rn12_token', { path: '/' })
//   location.reload()
// }

// export const redirectTo = (destination, { res, status } = {}) => {
//   if (res) {
//     res.writeHead(status || 302, { Location: destination })
//     res.end()
//   } else {
//     if (destination[0] === '/' && destination[1] !== '/') {
//       Router.push(destination)
//     } else {
//       window.location = destination
//     }
//   }
// }
