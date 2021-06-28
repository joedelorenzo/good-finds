import React from "react";
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const Icon = ({ className, ...other }) => <ReactSVG {...other} className={className} />;

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;