import { SET_SEARCH_DATA, SET_SUGGESTIONS, SET_SEARCH_VALUE } from '../actions/types'

const defaultState = {
  value: '',
  data: [],
  suggestions: []
}

export default (state = defaultState, action = {}) => {
  const { payload = {} } = action
  const { data, value } = payload
  switch (action.type) {
    case SET_SEARCH_DATA: return {
      ...state,
      data: [...data]
    }
    case SET_SUGGESTIONS: return {
      ...state,
      suggestions: [...data]
    }
    case SET_SEARCH_VALUE: return {
      ...state,
      value
    }
    default: return state
  }
}
