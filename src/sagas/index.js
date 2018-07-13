import { all } from 'redux-saga/effects'
import { watchSendSearchRequest, watchGetSuggestions } from './search'

export default function * rootSaga () {
  yield all([
    watchSendSearchRequest(),
    watchGetSuggestions()
  ])
}
