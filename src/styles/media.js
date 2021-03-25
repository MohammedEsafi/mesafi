import { css } from 'styled-components';

import { breakpoints } from '@config';

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...arg) => css`
		@media (max-width: ${breakpoints[label]}em) {
			${css(...arg)};
		}
	`;

	return accumulator;
}, {});

export default media;
