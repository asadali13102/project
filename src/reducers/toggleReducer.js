const data = {
  isTicketOpen: false,
  isChatOpen: false,
  isTaskModalOpen: false,
};

const toggleReducer = (state = data, action) => {
  switch (action.type) {
    case "ticket":
      return {
        ...state,
        isTicketOpen: action.payload,
      };

    case "chat":
      return {
        ...state,
        isChatOpen: action.payload,
      };

    case "isTaskModalOpen":
      return {
        ...state,
        isTaskModalOpen: action.payload,
      };

    case "collapse":
      return {
        ...state,
        collapse: action.payload,
      };

    default:
      return state;
  }
};
export default toggleReducer;
