import React from 'react';
import PropTypes from 'prop-types';

import './basic.css'
import styles from './layout.module.css';

const IndexWrapper = ({ children }) => (
  <div className={styles.wrapper}>
    {children()}
  </div>
);

IndexWrapper.propTypes = {
  children: PropTypes.func,
};

export default IndexWrapper
