import React from 'react';
import styled from 'styled-components';

import { Flex } from '@styles';
import { Menu } from '@components';
import { clamping } from '@utils';
import { breakpoints, padding } from '@config';

const Wrapper = styled(Flex)`
	width: 100%;
	height: 70px;
	max-width: var(--max-width);
	padding: ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
`;

const Header = () => (
	<Wrapper as='header' alignItems='center' justifyContent='space-between'>
		<p>Header</p>
		<Menu />
	</Wrapper>
);

// Header.propTypes = {
// 	siteTitle: PropTypes.string
// };

// Header.defaultProps = {
// 	siteTitle: ``
// };

export default Header;
