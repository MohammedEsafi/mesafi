import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Flex, media } from '@styles';
import { Menu, Logo, Toggle, Hamburger } from '@components/header';
import { clamping, hex2rgba } from '@utils';
import { breakpoints, padding, srConfig } from '@config';
import sr from '@utils/sr';

const DELTA = 5;

const Wrapper = styled(Flex)`
	width: 100%;
	background-color: ${({ theme }) => theme.background};
	height: var(--nav-height);
	max-width: var(--max-width);
	padding: 0 ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
	transition-property: height, box-shadow;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
	z-index: 100;

	${media.tablet`		
		${(props) =>
			props.fixed &&
			css`
				position: fixed;
				height: var(--nav-scroll-height);
				box-shadow: ${({ theme }) => hex2rgba(theme.onBackground, 0.1)} 0 -1px inset;
			`}
	`}
`;

const Header = ({ toggleMode }) => {
	const wrapperRef = useRef(null);
	const isFixed = useRef(false);
	const setFixed = useState(false)[1];
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		sr.reveal(wrapperRef.current, srConfig({ origin: 'top', delay: 150 }));

		return () => {
			sr.clean(wrapperRef.current);
		};
	}, []);

	useEffect(() => {
		const handler = () => {
			if (!window.matchMedia(`(max-width: ${breakpoints.tablet}em)`).matches) return;
			const isONTOP = window.scrollY > DELTA;

			if (isONTOP) {
				isFixed.current = true;
				setFixed(true);
			} else {
				isFixed.current = false;
				setFixed(false);
			}
		};

		window.addEventListener('scroll', handler);

		return () => {
			window.removeEventListener('scroll', handler);
		};
	}, []);

	return (
		<Wrapper as='header' alignItems='center' justifyContent='space-between' ref={wrapperRef} fixed={isFixed.current}>
			<Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
			<Logo />
			<Flex alignItems='center'>
				<Menu />
				<Toggle toggleMode={toggleMode} />
			</Flex>
		</Wrapper>
	);
};

Header.propTypes = {
	toggleMode: PropTypes.func.isRequired
};

export default Header;
