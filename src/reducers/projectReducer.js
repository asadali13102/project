const data = {
    getProjects: {title :'', sections:[]}
  };
  
  const projectReducer = (state = data, action) => {
    switch (action.type) {
      case "project-success":
        return {
          ...state,
          success: action.payload,
        };

      case "project-error":
        return {
          ...state,
          error: action.payload,
        };

      case "get-projects":
        return {
          ...state,
          getProjects: action.payload,
        };

  
      default:
        return state;
    }
  };
  export default projectReducer;
  