const data = {
  success: {},
  error: {},
  tasks: [],
  singleTask: {},

  taskProperties: {
    taskTitle: "",
    taskDescription: "",
    cost: 0,
    dueDate: "",
    section: "",
    createdBy: "6370e40f321912c8829be313",
    parentTaskId: "",
    isCompleted: false,
    documentPath: "",
    comments: [
      {
        comment: "this is the first comment",
        user: "6370e40f321912c8829be313",
      },
    ],
    assignee: [
      {
        assigneeId: "6370e40f321912c8829be313",
      },
    ],
  },
};

const taskReducer = (state = data, action) => {
  switch (action.type) {
    case "taskProperties":
      return {
        ...state,
        taskProperties: action.payload,
      };
    default:
      return state;
  }
};
export default taskReducer;
