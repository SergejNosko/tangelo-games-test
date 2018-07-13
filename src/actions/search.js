import { SEND_SEARCH_REQUEST, GET_SUGGESTIONS } from './types'

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
