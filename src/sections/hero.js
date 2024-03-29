import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Flex, Button } from '@styles';
import { clamping } from '@utils';
import { breakpoints, fontSize, srConfig } from '@config';
import sr from '@utils/sr';

const Wrapper = styled(Flex)`
	height: calc(100vh - var(--nav-height));

	& a {
		color: currentColor;
		padding: 24px 52px;
		display: block;
	}
`;

const Brief = styled.div`
	& p {
		text-align: center;
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.lg, fontSize.xxl)};
		margin: 0 0 100px;
		font-weight: 600;
	}
`;

const Hero = () => {
	const briefRef = useRef(null);
	const buttonRef = useRef(null);

	const data = useStaticQuery(graphql`
		query {
			markdownRemark(fileAbsolutePath: { regex: "/Hero/" }) {
				html
			}
		}
	`);

	useEffect(() => {
		sr.reveal(briefRef.current, srConfig({ delay: 300 }));
		sr.reveal(buttonRef.current, srConfig({ delay: 350 }));

		return () => {
			sr.clean(briefRef.current);
			sr.clean(buttonRef.current);
		};
	}, []);

	return (
		<Wrapper as='section' alignItems='center' justifyContent='center' flexDirection='column'>
			<Brief ref={briefRef}>
				<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
			</Brief>
			<Button ref={buttonRef}>
				<a aria-label='contact' href='#contact'>
					connect with me
				</a>
			</Button>
		</Wrapper>
	);
};

export default Hero;
