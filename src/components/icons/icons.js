import React from 'react';
import ProtoTypes from 'prop-types';

import { Mail, Arrow, Twitter, Dribbble, Figma, Link, Github, Linkedin } from '@components/icons';

const Icons = ({ name, ...props }) => {
	switch (name.toLowerCase()) {
		case 'mail':
			return <Mail {...props} />;
		case 'arrow':
			return <Arrow {...props} />;
		case 'twitter':
			return <Twitter {...props} />;
		case 'dribbble':
			return <Dribbble {...props} />;
		case 'figma':
			return <Figma {...props} />;
		case 'link':
			return <Link {...props} />;
		case 'github':
			return <Github {...props} />;
		case 'linkedin':
			return <Linkedin {...props} />;
		default:
			throw new Error('Icon not found!');
	}
};

Icons.protoType = {
	name: ProtoTypes.string.isRequired
};

export default Icons;
