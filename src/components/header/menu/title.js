import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { easing } from '@config';

const Finger = styled.span`
	display: inline-block;
`;

const Title = ({ text }) => {
	const Animate = (event) => {
		const target = event.currentTarget;

		target.animate(
			[
				{ transform: 'scale(1, 1)' },
				{ transform: 'scale(1.25, .75)' },
				{ transform: 'scale(.75, 1.25)' },
				{ transform: 'scale(1.15, .85)' },
				{ transform: 'scale(.95, 1.05)' },
				{ transform: 'scale(1.05, .95)' },
				{ transform: 'scale(1, 1)' }
			],
			{
				duration: 1000,
				easing,
				fill: 'forwards'
			}
		);
	};

	return (
		<>
			{text &&
				[...text].map((finger, index) => {
					if (finger.match(/\s/)) return finger;
					return (
						<Finger key={index} aria-hidden='true' onMouseOver={Animate} onFocus={Animate}>
							{finger}
						</Finger>
					);
				})}
		</>
	);
};

Title.propTypes = {
	text: PropTypes.string.isRequired
};

export default Title;
