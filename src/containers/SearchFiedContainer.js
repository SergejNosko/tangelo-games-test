import { connect } from 'react-redux'
import SearchField from '../components/SearchField'

import { sendSearchRequest, getSuggestions } from '../actions/search'

export default connect(null, { sendSearchRequest, getSuggestions })(SearchField)
