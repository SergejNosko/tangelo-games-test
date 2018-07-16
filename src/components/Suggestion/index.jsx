import React from 'react'

import styles from './styles.scss'

const Suggestion = ({ text, onClick }) => (
  <button className={styles.suggestion} onClick={() => onClick(text)}>{text}</button>
)

export default Suggestion
