import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Flex, media } from '@styles';
import { clamping } from '@utils';
import { breakpoints, padding, socialLinks, fontSize } from '@config';
import Icons from '@components/icons';

const Wrapper = styled(Flex)`
	width: 100%;
	max-width: var(--max-width);
	padding: 50px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
	box-shadow: ${({ theme }) => theme.shadow} 0 1px 0 0 inset;

	& > p {
		white-space: nowrap;
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xs, fontSize.sm)};

		& a {
			color: ${({ theme }) => theme.secondary};
		}
	}

	& svg {
		max-width: 0.7em;
	}

	${media.tablet`
		flex-direction: column-reverse;
		align-items: center;

		& > p {
			margin: 35px 0 0;
		}
	`}
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	align-items: center;

	& > li {
		width: 20px;
		height: 20px;

		&:not(:last-child) {
			margin-right: 25px;
		}

		& a {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		& svg {
			width: 100%;
			max-width: 100%;
		}
	}
`;

const Footer = () => {
	const theme = useContext(ThemeContext);

	return (
		<Wrapper as='footer' justifyContent='space-between'>
			<p>
				Designed & Built by
				<a href='https://github.com/MohammedEsafi'>
					<span> Mohammed Esafi </span>
					<Icons name='link' />
				</a>
			</p>
			<List>
				{socialLinks?.map(({ name, url }, index) => (
					<li key={index}>
						<a href={url}>
							<Icons name={name} fill={theme.onBackground} />
						</a>
					</li>
				))}
			</List>
		</Wrapper>
	);
};

export default Footer;
