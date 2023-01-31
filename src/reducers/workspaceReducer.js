const data = {
    getWorkspaces: [],
  };
  
  const workspaceReducer = (state = data, action) => {
    switch (action.type) {
      case "workspace-success":
        return {
          ...state,
          success: action.payload,
        };

      case "workspace-error":
        return {
          ...state,
          error: action.payload,
        };

      case "get-workspaces":
        return {
          ...state,
          getWorkspaces: action.payload,
        };

  
      default:
        return state;
    }
  };
  export default workspaceReducer;
  