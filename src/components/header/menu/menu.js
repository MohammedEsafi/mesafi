import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Flex, media } from '@styles';
import { navLinks, easing } from '@config';
import { Title } from '@components/header/menu';

const List = styled(Flex)`
	list-style: none;
	margin: 0;
	padding: 0;

	${media.tablet`
		position: absolute;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;
		left: 0;
		top: -100vh;
		background-color: ${({ theme }) => theme.secondary};
		z-index: -1;
		transform: translateY(${({ menuOpen }) => (menuOpen ? '100%' : '0')});
		transition-property: transform;
		transition-duration: 200ms;
		transition-timing-function: ${easing};
	`}

	${({ length, menuOpen }) =>
		[...new Array(length).keys()].reduce(
			(accumulator, index) =>
				accumulator.concat(`
					& > li:nth-child(${index + 1}) {
						transition-delay: ${menuOpen ? (index + 1) * 50 + 200 : 0}ms;
					}
				`),
			''
		)};
`;

const Item = styled(Flex)`
	transition-property: visibility;
	transition-duration: 200ms;
	transition-timing-function: ${easing};

	${media.tablet`
		visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
	`};
`;

const Link = styled.a`
	color: ${({ theme }) => theme.text.primary};
	padding: 20px 30px;
`;

const Menu = ({ menuOpen }) => (
	<Flex as='nav'>
		<List as='ul' menuOpen={menuOpen} length={navLinks.length}>
			{navLinks?.map(({ name, url }, index) => (
				<Item as='li' key={index} menuOpen={menuOpen}>
					<Link href={url}>
						<Title text={name} />
					</Link>
				</Item>
			))}
		</List>
	</Flex>
);

Menu.propTypes = {
	menuOpen: PropTypes.bool.isRequired
};

export default Menu;
