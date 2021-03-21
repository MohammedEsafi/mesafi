import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';

import { Flex } from '@styles';
import { clamping, hex2rgba } from '@utils';
import { breakpoints, padding, socialLinks } from '@config';
import Icons from '@components/icons';

const Wrapper = styled(Flex)`
	width: 100%;
	max-width: var(--max-width);
	padding: 50px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
	border-top: 1px solid ${({ theme }) => theme.subdued};

	& > p {
		white-space: nowrap;

		& a {
			color: ${({ theme }) => theme.secondary};
		}
	}

	& svg {
		max-width: 0.8em;
	}
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;

	& > li {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: ${({ theme }) => hex2rgba(theme.subdued, 0.5)};

		&:not(:last-child) {
			margin-right: 25px;
		}

		&:hover {
			background-color: ${({ theme }) => theme.subdued};
		}

		& a {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		& svg {
			max-width: 35%;
		}
	}
`;

const Footer = () => {
	const theme = useContext(ThemeContext);

	return (
		<Wrapper as='footer' justifyContent='space-between'>
			<p>
				Designed & Built by
				<Link to='https://github.com/MohammedEsafi' target='_blank'>
					<span> Mohammed Esafi </span>
					<Icons name='link' />
				</Link>
			</p>
			<List>
				{socialLinks?.map(({ name, url }, index) => (
					<li key={index}>
						<Link to={url}>
							<Icons name={name} fill={theme.onBackground} />
						</Link>
					</li>
				))}
			</List>
		</Wrapper>
	);
};

export default Footer;
