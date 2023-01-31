export const msgId = (ID) => {
  return (dispatch) => {
    return dispatch(
      {
      type: "msgID",
      payload: ID
    }
    )
  }
}

export function messages (msgs) {
  return (dispatch) => {
      return dispatch({
        type: "comments",
        payload: msgs,
      });
  }
}