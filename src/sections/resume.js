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

	& > div {
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xs, fontSize.sm)};
		line-height: 2.5em;

		& > ul {
			display: flex;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			list-style: none;

			& > li {
				width: 50%;
				color: ${({ theme }) => theme.text.subdued};
			}
		}
	}
`;

const Resume = () => {
	const data = useStaticQuery(graphql`
		query {
			markdownRemark(fileAbsolutePath: { regex: "/resume/" }) {
				html
			}
		}
	`);

	return (
		<Wrapper as='section' flexDirection='column'>
			<Title>resume</Title>
			<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
		</Wrapper>
	);
};

export default Resume;
