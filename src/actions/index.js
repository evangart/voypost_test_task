export const GET_TRAVELERS = "GET_TRAVELERS"
export const SET_FILTER = "SET_FILTER"

export function getTravelers() {
  return (dispatch, getState) => {
    const { socket } = getState()

    dispatch({
      type: GET_TRAVELERS,
      status: "request"
    })

    socket.emit("getTravelers", (data) => {
      dispatch({
        type: GET_TRAVELERS,
        status: data ? "success" : "failure",
        payload: { data }
      })
    })
  }
}

export function setFilter(filterValue) {
  return {
    type: SET_FILTER,
    payload: filterValue
  }
}