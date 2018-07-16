import { connect } from 'react-redux'
import Root from '../components/Root'

import { setSearchValue } from '../actions/search'

export default connect(({
  search: {
    data,
    suggestions
  }
}) => ({
  data,
  suggestions
}), { setSearchValue })(Root)
