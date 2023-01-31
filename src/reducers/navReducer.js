const data = {
  toggle: true,
};

const navReducer = (state = data, action) => {
  
  switch (action.type) {


    case "collapse":
      return {
        ...state,
        toggle: action.payload,
      };

    default:
      return state;
  }
};
export default navReducer;
