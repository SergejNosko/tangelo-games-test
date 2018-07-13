import React from 'react'

import styles from './styles.scss'

class SearchField extends React.Component {
  constructor (props) {
      super(props)

      this.state = {
          value: ''
      }
  }

  onChange = async (e) => {
    const { target } = e

    await this.setState({ value: target.value })

    this.props.getSuggestions(this.state.value)
  }

  onReset = (e) => {
    this.setState({ value: '' })
  }

  onSubmit = (e) => {
    e.preventDefault() 

    this.props.sendSearchRequest(this.state.value)
  }

  render () {
    return (
      <form onSubmit={this.onSubmit} className={styles.search}>
        <input type='text' className={styles.searchField} onChange={this.onChange} value={this.state.value} />
        <button className={styles.searchResetButton} onClick={this.onReset} type='reset'>x</button>
      </form>
    )
  }
}

export default SearchField
