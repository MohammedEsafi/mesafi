import React from 'react';
import styled from 'styled-components';

import { Flex } from '@styles';
import { navLinks } from '@config';

const UL = styled(Flex)`
	list-style: none;
	margin: 0;
	padding: 0;

	& > li:not(:last-child) {
		margin-right: 30px;
	}

	& > li > a {
		color: ${({ theme }) => theme.onBackground};
		font-weight: 600;
	}
`;

const Menu = () => (
	<Flex as='nav'>
		<UL as='ul'>
			{navLinks?.map(({ name, url }, index) => (
				<li key={index}>
					<a href={url}>{name}</a>
				</li>
			))}
		</UL>
	</Flex>
);

export default Menu;
