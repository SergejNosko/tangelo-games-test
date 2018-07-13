import React from 'react'

import styles from './styles.scss'

const SearchResult = ({ url, title, description }) => (
  <a href={url} className={styles.card}>
    <h2 className={styles.cardTitle}>{title}</h2>
    <p className={styles.cardDescription}>{description}</p>
  </a>
)

export default SearchResult
