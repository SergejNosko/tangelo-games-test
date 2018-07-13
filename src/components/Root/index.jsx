import React from 'react'

import styles from './styles.scss'
import './normalize.scss'

import SearchField from '../../containers/SearchFiedContainer'
import SearchResult from '../SearchResult'

class Root extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <h1 className={styles.mainTitle}>Click here for a random article</h1>
        <SearchField />
        <ul className={styles.resultList}>
          {this.props.data && this.props.data.map((d, i) => (
            <li key={i} className={styles.resultListItem}>
              <SearchResult url={d.url} title={d.title} description={d.description} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Root
