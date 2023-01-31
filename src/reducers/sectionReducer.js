const data = {
    success : "",
    error: "",
    getSections: [],
    isDuplicateField: false
  };
  
  const sectionReducer = (state = data, action) => {
    switch (action.type) {
      case "success":
        return {
          ...state,
          success: action.payload,
        };

      case "error":
        return {
          ...state,
          error: action.payload,
        };

      case "getSections":
        return {
          ...state,
          getSections: action.payload,
        };

      case "isDuplicateField":
        return {
          ...state,
          isDuplicateField: action.payload,
        };

      case "logout":
        return {
          ...state,
          getSections: []
        };

  
      default:
        return state;
    }
  };
  export default sectionReducer;
  