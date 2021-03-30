import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Layout } from '@components';
import { Flex } from '@styles';
import { clamping } from '@utils';
import { breakpoints } from '@config';

const Content = styled(Flex)`
	height: calc(100vh - var(--nav-height));

	& > h1 {
		font-size: ${clamping(breakpoints.phone, breakpoints.desktop, 9, 15)};
		margin: 0;
		line-height: normal;
	}
`;

const NotFoundPage = ({ location }) => (
	<Layout location={location} title='404' noFooter>
		<Content flexDirection='column' alignItems='center' justifyContent='center'>
			<h1>404</h1>
			<p>Uh-Oh! The page not found!</p>
		</Content>
	</Layout>
);

NotFoundPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default NotFoundPage;
