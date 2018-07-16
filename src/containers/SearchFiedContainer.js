import { connect } from 'react-redux'
import SearchField from '../components/SearchField'

import { sendSearchRequest, getSuggestions, setSearchValue } from '../actions/search'

export default connect(
  ({
    search: { value }
  }) => ({
    value
  }),
  { sendSearchRequest, getSuggestions, setSearchValue })(SearchField)
