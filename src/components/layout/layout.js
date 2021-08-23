import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, Theme, Flex } from '@styles';
import { Header, Footer } from '@components';
import { SEO } from '@components/layout';
import { useMode } from '@hooks';
import { breakpoints, padding, siteLanguage } from '@config';
import { clamping } from '@utils';

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]');
}

const Main = styled.main`
	width: 100%;
	max-width: var(--max-width);
	padding: 0 ${clamping(breakpoints.phone, breakpoints.desktop, padding.min, padding.max)};
	margin-top: 100px;
`;

const Layout = ({ children, location, title, noFooter }) => {
	const [mounted, setMounted] = useState(false);
	const [mode, toggleMode] = useMode();
	const { darkTheme, lightTheme } = Theme;
	const themeMode = mode === 'dark' ? darkTheme : lightTheme;

	useEffect(() => {
		setMounted(true);

		if (location.hash) {
			const id = location.hash.substring(1);
			setTimeout(() => {
				const node = document.getElementById(id);
				if (node) {
					node.scrollIntoView();
					node.focus();
				}
			});
		}
	}, []);

	useEffect(() => {
		const year = new Date().getFullYear();

		console.log(`© ${year}. All rights are reserved — Made with 🖤 by %cMohammed Esafi`, 'font-style: italic');

		console.log('This website was coded using Gatsby, React, GraphQL, Styled Components and hosted on Vercel');

		console.log('Open sourced on: https://github.com/MohammedEsafi/mesafi');

		console.log('Have a great day! 😘');
	}, []);

	return (
		mounted && (
			<>
				<ThemeProvider theme={themeMode}>
					<SEO title={title} lang={siteLanguage} />
					<GlobalStyle />
					<Flex flexDirection='column' width='100%' alignItems='center'>
						<Header toggleMode={toggleMode} />
						<Main>
							<Flex flexDirection='column' width='100%'>
								{children}
							</Flex>
						</Main>
						{!noFooter && <Footer />}
					</Flex>
				</ThemeProvider>
			</>
		)
	);
};

Layout.defaultProps = {
	title: '',
	noFooter: false
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	location: PropTypes.object.isRequired,
	title: PropTypes.string,
	noFooter: PropTypes.bool
};

export default Layout;
