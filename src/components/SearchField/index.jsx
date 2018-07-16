import React from 'react'

import styles from './styles.scss'

class SearchField extends React.Component {
  constructor (props) {
      super(props)
  }

  onChange = async (e) => {
    const { target } = e

    this.props.setSearchValue(target.value)

    this.props.getSuggestions(target.value)
  }

  onReset = (e) => {
    this.setState({ value: '' })
  }

  onSubmit = (e) => {
    e.preventDefault() 

    this.props.sendSearchRequest(this.props.value)
  }

  render () {
    return (
      <form onSubmit={this.onSubmit} className={styles.search}>
        <input type='text' className={styles.searchField} onChange={this.onChange} value={this.props.value} />
        <button className={styles.searchResetButton} onClick={this.onReset} type='reset'>x</button>
      </form>
    )
  }
}

export default SearchField
