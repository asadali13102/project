const data = {
  success: "",
  error: "",
  user: {},
  users:[]
};

const userReducer = (state = data, action) => {
  switch (action.type) {
    case "successUser":
      return {
        ...state,
        success: action.payload,
      };

      case "success-get":
        return {
          ...state,
          users: action.payload,
        };

    case "userError":
      return {
        ...state,
        error: action.payload,
      };

    case "user":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
