import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Flex } from '@styles';
import { clamping } from '@utils';
import { breakpoints, padding, fontSize } from '@config';
import { Title } from '@components';

const Wrapper = styled(Flex)`
	max-width: var(--max-width);
	margin: auto;
	padding: 50px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};

	& > div > ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
		margin: 0;
		padding: 0;
		list-style: none;

		& > li:before {
			content: '▹';
			margin-right: 10px;
			color: ${({ theme }) => theme.secondary};
			font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xs, fontSize.sm)};
		}
	}
`;

const About = () => {
	const data = useStaticQuery(graphql`
		query {
			markdownRemark(fileAbsolutePath: { regex: "/About/" }) {
				html
				frontmatter {
					title
				}
			}
		}
	`);

	return (
		<Wrapper id='about' as='section' flexDirection='column'>
			<Title>{data.markdownRemark.frontmatter.title}</Title>
			<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
		</Wrapper>
	);
};

export default About;