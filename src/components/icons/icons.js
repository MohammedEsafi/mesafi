import React from 'react';
import ProtoTypes from 'prop-types';

import { Mail, Arrow } from '@components/icons';

const Icons = ({ name }) => {
	switch (name.toLowerCase()) {
		case 'mail':
			return <Mail />;
		case 'arrow':
			return <Arrow />;
		default:
			throw new Error('Icon not found!');
	}
};

Icons.protoType = {
	name: ProtoTypes.string.isRequired
};

export default Icons;
