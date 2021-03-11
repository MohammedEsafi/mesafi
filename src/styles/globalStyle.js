import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--font: 'Inter', sans-serif;
		--max-width: 1200px;
		--nav-height: 100px;
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
		color: ${({ theme }) => theme.onBackground};
		background-color: ${({ theme }) => theme.background};
	}

	a {
		text-decoration: none;
	}
`;

export default GlobalStyle;
