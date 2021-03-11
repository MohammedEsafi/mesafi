import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Flex, Button } from '@styles';

const Wrapper = styled(Flex)`
	height: calc(100vh - var(--nav-height));
`;

const Brief = styled.div`
	& h1 {
		text-align: center;
	}

	& p {
		text-align: center;
	}
`;

const Hero = () => {
	const data = useStaticQuery(graphql`
		query {
			markdownRemark(fileAbsolutePath: { regex: "/hero/" }) {
				html
				frontmatter {
					avatar
					greetings
				}
			}
		}
	`);

	return (
		<Wrapper alignItems='center' justifyContent='center' flexDirection='column'>
			<Brief>
				<h1 dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.greetings }} />
				<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
			</Brief>
			<Button>connect with me</Button>
		</Wrapper>
	);
};

export default Hero;
