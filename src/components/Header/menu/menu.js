import React from 'react';
import styled from 'styled-components';

import { Flex } from '@styles';
import { navLinks } from '@config';
import { Title } from '@components/header/menu';

const UL = styled(Flex)`
	list-style: none;
	margin: 0;
	padding: 0;

	& > li > a {
		color: ${({ theme }) => theme.onBackground};
		padding: 20px 30px;
	}
`;

const Menu = () => (
	<Flex as='nav'>
		<UL as='ul'>
			{navLinks?.map(({ name, url }, index) => (
				<Flex as='li' key={index}>
					<a href={url}>
						<Title text={name} />
					</a>
				</Flex>
			))}
		</UL>
	</Flex>
);

export default Menu;
