const data = {
  rooms:[]
}
  const roomReducer = (state=data, action)=>{
      switch (action.type) {
          case "room-success":
            return {
              ...state,
              room: action.payload,
            };
      
          case "room-error":
            return {
              ...state,
              error: action.payload,
            };

          case "room":
            return {
              ...state,
              rooms: action.payload,
            };
      
          
          default:
            return state;
        }
      };
  export default roomReducer;