import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { easing } from '@config';

const Wrapper = styled.button`
	padding: 10px;
	margin-left: 20px;
	cursor: pointer;
	background-color: transparent;
	border: none;
`;

const Content = styled.div`
	position: relative;
	width: 20px;
	height: 20px;
	border: 1px ${({ theme }) => theme.onBackground} solid;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.onBackground};
	transition: background-color 300ms ${easing};

	&:after {
		content: '';
		border-radius: 100px 0 0 100px;
		background-color: ${({ theme }) => theme.background};
		transition: background-color 300ms ${easing};
		position: absolute;
		width: 9px;
		height: 18px;
		left: 0;
		top: 0;
	}
`;

const Toggle = ({ toggleMode }) => (
	<Wrapper onClick={toggleMode} type='button' aria-label='dark mode switcher'>
		<Content />
	</Wrapper>
);

Toggle.propTypes = {
	toggleMode: PropTypes.func.isRequired
};

export default Toggle;
