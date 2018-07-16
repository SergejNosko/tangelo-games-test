import { call, put, takeEvery } from 'redux-saga/effects'
import { SEND_SEARCH_REQUEST, SET_SEARCH_DATA, GET_SUGGESTIONS, SET_SUGGESTIONS } from '../actions/types'

function * sendSearchRequest (action) {
  const { value } = action.payload
  const res = yield call(
    window.fetch,
    `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${encodeURI(value)}&namespace=0`,
    {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      mode: 'cors'
    })
  const data = yield call([res, res.json])
  const structuredData = Array(data[1].length).fill(null).map((_, i) => ({
    title: data[1][i],
    description: data[2][i],
    url: data[3][i]
  }))
  yield put({ type: SET_SEARCH_DATA, payload: { data: structuredData } })
}

function * getSuggestions (action) {
  const { value } = action.payload
  const res = yield call(window.fetch, `/api?client=firefox&ds=yt&hl=en&q=${encodeURI(value)}`)
  const data = yield call([res, res.json])
  yield put({ type: SET_SUGGESTIONS, payload: { data: data[1] } })
}

export function * watchSendSearchRequest () {
  yield takeEvery(SEND_SEARCH_REQUEST, sendSearchRequest)
}

export function * watchGetSuggestions () {
  yield takeEvery(GET_SUGGESTIONS, getSuggestions)
}
