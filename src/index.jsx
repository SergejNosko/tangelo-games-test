import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import store from './store'

import Root from './containers/RootContainer'

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
)
