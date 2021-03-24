import { createGlobalStyle } from 'styled-components';

import { clamping } from '@utils';
import { breakpoints, fontSize } from '@config';

const GlobalStyle = createGlobalStyle`
	:root {
		--font: 'FuturaPT', sans-serif;
		--max-width: 1200px;
		--nav-height: 100px;
		--nav-scroll-height: 70px;
	}

	html {
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		font-family: var(--font);
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, fontSize.sm, fontSize.md)};
		color: ${({ theme }) => theme.text.primary};
		background-color: ${({ theme }) => theme.background};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}

	section {
		width: 100%;
	}

	a {
		text-decoration: none;
	}

	button:active,
	button:focus {
		outline: none;
	}

	span[role="img"][aria-hidden] {
		font-family: initial;
	}
`;

export default GlobalStyle;
