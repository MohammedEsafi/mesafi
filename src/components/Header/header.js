import React from 'react';
import styled from 'styled-components';

import { Flex } from '@styles';
import { Menu, Email } from '@components/Header';
import { clamping } from '@utils';
import { breakpoints, padding } from '@config';

const Wrapper = styled(Flex)`
	width: 100%;
	height: 100px;
	max-width: var(--max-width);
	padding: 20px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)} 0;
`;

const Header = () => (
	<Wrapper as='header' alignItems='center' justifyContent='space-between'>
		<Email />
		<Menu />
	</Wrapper>
);

export default Header;
