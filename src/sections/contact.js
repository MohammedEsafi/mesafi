import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Flex } from '@styles';
import { clamping } from '@utils';
import { breakpoints, padding, fontSize, email } from '@config';
import Icons from '@components/icons';

const Wrapper = styled(Flex)`
	position: relative;
	padding: 200px 0;
`;

const Content = styled(Flex)`
	width: 100%;
	max-width: var(--max-width);
	margin: auto;
	padding: 0 ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
	font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.md, fontSize.xl)};

	& p {
		text-align: center;
		margin-bottom: 0;
	}

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
		<Wrapper id='contact' as='section'>
			<Content flexDirection='column' justifyContent='center'>
				<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
				<p>
					<a href={`mailto:${email}`}>
						<span>{email}</span> <Icons name='link' />
					</a>
				</p>
			</Content>
		</Wrapper>
	);
};

export default Contact;
