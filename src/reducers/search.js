import { SET_SEARCH_DATA } from '../actions/types'

export default (state = {}, action = {}) => {
  const { payload = {} } = action
  const { data } = payload
  switch (action.type) {
    case SET_SEARCH_DATA: return {
      ...state,
      data: [...data]
    }
    default: return state
  }
}
