  const initialData = { res:{body: { data: [] }},msgId:''}
  
  const messageIdReducer = (state = initialData, action) => {
    switch (action.type) {
      case "msgID":
        return {
          ...state,
          msgId:action.payload,
        };

        case "comments":
        return {
        ...state,
        res:action.payload
        };
  
      default:
        return state;
    }
  };
  export default messageIdReducer;
  