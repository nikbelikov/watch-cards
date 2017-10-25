import React from 'react';
import PropTypes from 'prop-types';

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="wrapper">
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
