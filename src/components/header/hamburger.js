import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, Button } from '@styles';
import { easing } from '@config';

const Wrapper = styled(Button)`
	display: none;
	padding: 0;
	background-color: transparent;

	${media.tablet`
		display: block;
	`};
`;

const Padding = styled.div`
	position: relative;
	margin: 10px;
	width: 20px;
	height: 20px;
`;

const Line = styled.span`
	width: 20px;
	height: 2px;
	position: absolute;
	transform: translateY(-50%);
	background-color: ${({ theme }) => theme.onBackground};
	transition-property: transform, top, left, width;
	transition-duration: 300ms;
	transition-timing-function: ${easing};
	left: 0;

	&:first-child {
		top: 15%;

		${({ menuOpen }) =>
			menuOpen &&
			css`
				width: 10px;
				transform: rotate(-45deg);
				top: 6px;
				left: -2px;
			`}
	}

	&:nth-child(2) {
		top: 50%;
	}

	&:last-child {
		top: 85%;

		${({ menuOpen }) =>
			menuOpen &&
			css`
				width: 10px;
				transform: rotate(45deg);
				top: 12px;
				left: -2px;
			`}
	}
`;

const Hamburger = ({ menuOpen, toggleMenu }) => (
	<Wrapper type='button' onClick={toggleMenu} aria-label='menu toggle'>
		<Padding>
			{[...new Array(3)].map((_, index) => (
				<Line key={index} menuOpen={menuOpen} />
			))}
		</Padding>
	</Wrapper>
);

Hamburger.propTypes = {
	menuOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired
};

export default Hamburger;
