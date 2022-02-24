const initialState = {
  isModalRegisterVisible: false,
  isModalLoginVisible: false
}
      
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_IS_MODAL_REGISTER_VISIBLE':
    return {...state, isModalRegisterVisible: action.payload}
  case 'SET_IS_MODAL_LOGIN_VISIBLE':
    return {...state, isModalLoginVisible: action.payload}
  default:
    return state
  }
}

export default reducer
