import { connect } from 'react-redux'
import Root from '../components/Root'

export default connect(({
  search: { data }
}) => ({
  data
}))(Root)
