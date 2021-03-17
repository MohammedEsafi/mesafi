import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize } from '@config';

const Wrapper = styled.h1`
	font-size: ${fontSize.xs}rem;
	text-transform: uppercase;
	font-weight: 500;
	color: #aab2bd;
`;

const Title = ({ children }) => <Wrapper>{children}</Wrapper>;

Title.propTypes = {
	children: PropTypes.node.isRequired
};

export default Title;
