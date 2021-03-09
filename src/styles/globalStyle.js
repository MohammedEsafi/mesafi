import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--font: 'Inter', sans-serif;
		--padding: 0 20px;
		--max-width: 1200px;
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
		background-color: ${({ theme }) => theme.background};
	}
`;

export default GlobalStyle;
