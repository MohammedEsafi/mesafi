import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '@components';
import { Hero, Resume } from '@sections';

const IndexPage = ({ location }) => (
	<Layout location={location}>
		{/* <Hero /> */}
		{/* <Resume /> */}
	</Layout>
);

IndexPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default IndexPage;
