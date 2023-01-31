export const collapse = (val) => {
    return{
      type: "collapse",
      payload: val
    }
  }
  
  export const isTicketOpen = (val) => {
    return{
      type: "ticket",
      payload: val
    }
  }
  
  export const isChatOpen = (val) => {
    return{
      type: "chat",
      payload: val
    }
  }

  export const isTaskModalOpen = (val) => {
    return{
      type: "isTaskModalOpen",
      payload: val
    }
  }
