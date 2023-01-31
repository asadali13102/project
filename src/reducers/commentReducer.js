const data = {
  comments:[
    {_id:'1',messageDescription:''}
  ]
};

const commentReducer = (state = data, action) => {
  switch (action.type) {
    case "comment-success":
      return {
        ...state,
        comment: action.payload,
      };

    case "comments":
      return {
        ...state,
        comments: action.payload,
      };

    case "user-error":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default commentReducer;
