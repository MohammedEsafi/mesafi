import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, Theme, Flex } from '@styles';
import { Header, Footer } from '@components';
import { SEO } from '@components/layout';
import { useMode } from '@hooks';

const Main = styled.main`
	width: 100%;
`;

const Layout = ({ children, location }) => {
	const [mounted, setMounted] = useState(false);
	const [mode] = useMode();
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

		console.log('This website was coded using Gatsby, React, GraphQL, Styled Components and hosted on Netlify');

		console.log('Open sourced on: https://github.com/MohammedEsafi/mesafi');

		console.log('Have a great day! 😘');
	}, []);

	return (
		mounted && (
			<>
				<ThemeProvider theme={themeMode}>
					<SEO title='Home' />
					<GlobalStyle />
					<Flex flexDirection='column' width='100%' alignItems='center'>
						<Header />
						<Main>
							<Flex flexDirection='column' width='100%'>
								{children}
							</Flex>
						</Main>
						<Footer />
					</Flex>
				</ThemeProvider>
			</>
		)
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	location: PropTypes.object.isRequired
};

export default Layout;
