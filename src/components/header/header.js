import React from 'react';
import styled from 'styled-components';

import { Flex } from '@styles';
import { Menu, Logo } from '@components/header';
import { clamping } from '@utils';
import { breakpoints, padding } from '@config';

const Wrapper = styled(Flex)`
	width: 100%;
	height: var(--nav-height);
	max-width: var(--max-width);
	padding: 20px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)} 0;
`;

const Header = () => (
	<Wrapper as='header' alignItems='center' justifyContent='space-between'>
		<Logo />
		<Menu />
	</Wrapper>
);

export default Header;
