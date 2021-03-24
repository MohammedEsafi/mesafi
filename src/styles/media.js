import { breakpoints } from '@config';
import { css } from 'styled-components';

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...arg) => css`
		@media (max-width: ${breakpoints[label]}em) {
			${css(...arg)};
		}
	`;

	return accumulator;
}, {});

export default media;
