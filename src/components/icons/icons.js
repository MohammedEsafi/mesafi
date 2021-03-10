import React from 'react';
import { Mail, Arrow } from '@components/icons';
import ProtoTypes from 'prop-types';

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
