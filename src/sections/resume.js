import React from 'react';
import styled from 'styled-components';

import { Flex, Grid } from '@styles';
import { clamping } from '@utils';
import { breakpoints, padding, fontSize } from '@config';
import { Title } from '@components';

const Wrapper = styled(Flex)`
	max-width: var(--max-width);
	margin: auto;
	padding: 20px ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
`;

const Content = styled(Grid)``;

const Card = styled(Flex)`
	& > h2 {
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.lg, fontSize.xl)};
		font-weight: 500;
	}

	& > h3 {
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.md, fontSize.lg)};
		font-weight: 600;
	}

	& > h4 {
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.xs, fontSize.sm)};
		font-weight: 500;
		margin: 10px 0;
	}

	& p {
		color: ${({ theme }) => theme.text};
		margin: 1.25em 0;
	}
`;

const Resume = () => (
	<Wrapper as='section' flexDirection='column'>
		<Title>resume</Title>
		<Content templateColumns='1fr 1fr' templateRows='auto auto'>
			{/* <Card flexDirection='column'>
				<h2>Work Experience</h2>
				<>
					<h3>Envato</h3>
					<h4>FrontEnd Developer</h4>
					<p>2018 - Current</p>
				</>
				<>
					<h3>Freelancer</h3>
					<h4>Product Designer</h4>
					<p>2017 - 2018</p>
				</>
			</Card>
			<Card flexDirection='column'>
				<h2>Education</h2>
				<>
					<h3>Ibn zohr High School</h3>
					<h4>bachelor of science physics.</h4>
					<p>2014 - 2017</p>
				</>
				<>
					<h3>1337 ― 42 Network</h3>
					<h4>Software engineering school.</h4>
					<p>2019 - Current</p>
				</>
			</Card> */}
			<Card flexDirection='column'>
				<h2>Skills</h2>
				<p>Visual Development</p>
				<p>Webflow Development</p>
				<p>Front-End Development</p>
				<p>HTML5/CSS3</p>
				<p>No-Code Solutions</p>
			</Card>
			<Card flexDirection='column'>
				<h2>Tools</h2>
				<p>Figma</p>
				<p>Notion</p>
				<p>Illustrator</p>
				<p>Sketch</p>
				<p>Visual Studio Code</p>
			</Card>
		</Content>
	</Wrapper>
);

export default Resume;
