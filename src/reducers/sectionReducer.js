const data = {
  success: "",
  error: "",
  getSections: [],
  isDuplicateField: false,
};

const sectionReducer = (state = data, action) => {
  switch (action.type) {
    case "getSections":
      return {
        ...state,
        getSections: action.payload,
      };
    default:
      return state;
  }
};
export default sectionReducer;
