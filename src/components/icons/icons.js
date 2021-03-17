import React from 'react';
import ProtoTypes from 'prop-types';

import { Mail, Arrow, Twitter, Dribbble, Figma } from '@components/icons';

const Icons = ({ name }) => {
	switch (name.toLowerCase()) {
		case 'mail':
			return <Mail />;
		case 'arrow':
			return <Arrow />;
		case 'twitter':
			return <Twitter />;
		case 'dribbble':
			return <Dribbble />;
		case 'figma':
			return <Figma />;
		default:
			throw new Error('Icon not found!');
	}
};

Icons.protoType = {
	name: ProtoTypes.string.isRequired
};

export default Icons;
