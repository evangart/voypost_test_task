import { combineReducers } from "redux"
import {GET_TRAVELERS, SET_FILTER} from "../actions"

const defaultFilters = {
  fromName: "",
  toName: ""
}

function socket(state = {}, action) {
  return state
}

function travelers(state = [], action) {
  const { type, payload, status } = action

  if (!status) return state
  if (status !== "success") return state

  switch (type) {
    case GET_TRAVELERS: return payload && payload.data ? payload.data : state
  }

  return state
}

function filters(state = defaultFilters, action) {
  const { type, payload } = action

  switch (type) {
    case SET_FILTER: return { ...state, ...payload }
  }

  return state
}

export default combineReducers({
  socket,
  travelers,
  filters
})