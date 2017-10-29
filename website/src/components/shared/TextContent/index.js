import React from 'react';
import styles from './styles.module.css';

const TextContent = ({children}) => (
  <article className={styles.wrapper}>
    {children}
  </article>
);

export default TextContent
