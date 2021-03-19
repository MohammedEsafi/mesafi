import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { clamping } from '@utils';
import { breakpoints, fontSize } from '@config';

const Wrapper = styled.h1`
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xxs, fontSize.xs)};
	text-transform: uppercase;
	font-weight: 500;
	color: #aab2bd;
	letter-spacing: 0.1em;
	transform: scaleY(0.8);
`;

const Title = ({ children }) => <Wrapper>{children}</Wrapper>;

Title.propTypes = {
	children: PropTypes.node.isRequired
};

export default Title;
