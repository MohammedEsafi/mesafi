import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Flex, Button } from '@styles';
import { clamping } from '@utils';
import { breakpoints, padding, fontSize } from '@config';

const Wrapper = styled(Flex)`
	height: calc(100vh - var(--nav-height));
	max-width: var(--max-width);
	margin: auto;
	padding: 20px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
`;

const Brief = styled.div`
	& p {
		text-align: center;
		font-size: 40px;
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.sm, fontSize.xxl)};
		line-height: 2em;
		margin: 100px 0;
		font-weight: 500;
	}
`;

const Hero = () => {
	const data = useStaticQuery(graphql`
		query {
			markdownRemark(fileAbsolutePath: { regex: "/hero/" }) {
				html
			}
		}
	`);

	return (
		<Wrapper alignItems='center' justifyContent='center' flexDirection='column'>
			<Brief>
				<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
			</Brief>
			<Button>connect with me</Button>
		</Wrapper>
	);
};

export default Hero;
