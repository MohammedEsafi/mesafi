import React from 'react';
import styled from 'styled-components';

import { Flex } from '@styles';
import { clamping } from '@utils';
import { breakpoints, padding } from '@config';

const Wrapper = styled(Flex)`
	width: 100%;
	max-width: var(--max-width);
	padding: 20px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
	border-top: 1px solid #fff;
`;

const Footer = () => (
	<Wrapper as='footer' justifyContent='space-between'>
		<p>left</p>
		<p>right</p>
	</Wrapper>
);

export default Footer;
