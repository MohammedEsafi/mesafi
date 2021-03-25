import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Flex, media } from '@styles';
import { clamping, hex2rgba } from '@utils';
import { breakpoints, padding, fontSize, email } from '@config';
import Icons from '@components/icons';

const Wrapper = styled(Flex)`
	position: relative;
	padding: 200px 0;

	/* &:before {
		content: '';
		width: 60vw;
		height: 60vw;
		border-radius: 50%;
		border: 1px solid ${({ theme }) => hex2rgba(theme.secondary, 0.05)};
		position: absolute;
		left: 0;
		bottom: 100%;
		transform: translate(-40%, 100%);

		${media.phone`
			width: 80vw;
			height: 80vw;
		`}
	}

	&:after {
		content: '';
		width: 50vw;
		height: 50vw;
		border-radius: 50%;
		border: 1px solid ${({ theme }) => hex2rgba(theme.secondary, 0.05)};
		position: absolute;
		right: 0;
		bottom: 50%;
		transform: translate(20%, 50%);

		${media.phone`
			width: 70vw;
			height: 70vw;
			transform: translate(20%, 100%);
		`}
	} */
`;

const Content = styled(Flex)`
	width: 100%;
	max-width: var(--max-width);
	margin: auto;
	padding: 0 ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.md, fontSize.xl)};
	text-align: center;

	& a {
		color: ${({ theme }) => theme.secondary};

		& svg {
			max-width: 0.7em;
		}
	}
`;

const Contact = () => {
	const data = useStaticQuery(graphql`
		query {
			markdownRemark(fileAbsolutePath: { regex: "/Contact/" }) {
				html
			}
		}
	`);

	return (
		<Wrapper as='section'>
			<Content flexDirection='column' justifyContent='center'>
				<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
				<a href={`mailto:${email}`}>
					<span>{email}</span> <Icons name='link' />
				</a>
			</Content>
		</Wrapper>
	);
};

export default Contact;
