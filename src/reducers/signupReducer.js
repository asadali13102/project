const data={
  response:{
    status:1,
    data:{userId:''}
  },
  error: {
    response: {
      status: 0,
    },
  },
};
const signupReducer = (state = data, action) => {
  switch (action.type) {
    case "OTP-verified":
      return {
        response: action.payload,
      };
    case "OTP-success":
      return {
        response: action.payload,
      };
    case "OTP-error":
      return {
        error: action.payload,
      };
    case "signUp-success":
      return {
        //...state,
        response: action.payload,
      };
    case "signUp-error":
      return {
        //...state,
        error: action.payload,
      };
    case "signin-success":
      return {
        // ...state,
        response: action.payload,
      };
    case "signin-error":
      return {
        // ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default signupReducer;
