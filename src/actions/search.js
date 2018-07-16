import { SEND_SEARCH_REQUEST, GET_SUGGESTIONS, SET_SEARCH_VALUE } from './types'

export const sendSearchRequest = (value) => ({
  type: SEND_SEARCH_REQUEST,
  payload: {
    value
  }
})

export const getSuggestions = (value) => ({
  type: GET_SUGGESTIONS,
  payload: {
    value
  }
})

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: {
    value
  }
})
