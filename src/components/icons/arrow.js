import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ fill }) => (
	<svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path d='M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z' fill={fill} />
	</svg>
);

Arrow.propTypes = {
	fill: PropTypes.string.isRequired
};

export default Arrow;
