import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '@components';
import { Hero, About, Contact } from '@sections';

const IndexPage = ({ location }) => (
	<Layout location={location}>
		<Hero />
		<About />
		<Contact />
	</Layout>
);

IndexPage.propTypes = {
	location: PropTypes.object.isRequired
};

export default IndexPage;
