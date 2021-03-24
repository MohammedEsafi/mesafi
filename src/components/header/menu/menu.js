import React from 'react';
import styled from 'styled-components';

import { Flex, media } from '@styles';
import { navLinks } from '@config';
import { Title } from '@components/header/menu';

const UL = styled(Flex)`
	list-style: none;
	margin: 0;
	padding: 0;

	& > li > a {
		color: ${({ theme }) => theme.text.primary};
		padding: 20px 30px;
	}

	${media.tablet`
		display: none;
	`}
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
