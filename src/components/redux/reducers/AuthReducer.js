const initState = {
  authError: false
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success', action);
      // const userdata = Object.assign({}, state, { userdata: action.data.user })
      return {
        ...state,
        authError: false
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state
    default:
      return state
  }
};

export default authReducer;