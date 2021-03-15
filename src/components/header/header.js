import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Flex } from '@styles';
import { Menu, Logo } from '@components/header';
import { clamping } from '@utils';
import { breakpoints, padding, srConfig } from '@config';
import sr from '@utils/sr';

const Wrapper = styled(Flex)`
	width: 100%;
	height: var(--nav-height);
	max-width: var(--max-width);
	padding: 20px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)} 0;
`;

const Header = () => {
	const wrapperRef = useRef(null);

	useEffect(() => {
		sr.reveal(wrapperRef.current, srConfig({ origin: 'top', delay: 150 }));

		return () => {
			sr.clean(wrapperRef.current);
		};
	}, []);

	return (
		<Wrapper as='header' alignItems='center' justifyContent='space-between' ref={wrapperRef}>
			<Logo />
			<Menu />
		</Wrapper>
	);
};

export default Header;
