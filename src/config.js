module.exports = {
	siteTitle: `Mohammed Esafi`,
	siteDescription: 'Mohammed Esafi is a software engineer who interested in building web apps, creative coding, design & tech inclusion.',
	siteUrl: 'https://mesafi.com',
	siteLanguage: 'en',
	name: 'Mohammed Esafi',
	author: '@MohammedEsafi',
	defaultTheme: 'dark',
	email: 'hello@mesafi.com',
	image: '/og.png', // open graph image
	navLinks: [
		{
			name: 'About',
			url: '/#about'
		},
		{
			name: 'Work',
			url: 'https://github.com/MohammedEsafi'
		},
		{
			name: 'Contact',
			url: '/#contact'
		}
	],
	socialLinks: [
		{
			name: 'Github',
			url: 'https://github.com/MohammedEsafi'
		},
		{
			name: 'Codepen',
			url: 'https://codepen.io/MohammedEsafi'
		},
		{
			name: 'Figma',
			url: 'https://www.figma.com/@MohammedEsafi'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/MohammedEsafi'
		}
	],

	breakpoints: {
		desktop: 1200 / 16,
		tablet: 768 / 16,
		phone: 480 / 16
	},
	padding: {
		min: 1.5,
		max: 3.25
	},
	fontSize: {
		xxs: 14 / 16,
		xs: 16 / 16,
		sm: 18 / 16,
		md: 20 / 16,
		lg: 24 / 16,
		xl: 30 / 16,
		xxl: 38 / 16
	},
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	srConfig: ({ origin = 'bottom', delay = 200, viewFactor = 0.25 } = {}) => ({
		origin,
		distance: '10px',
		duration: 500,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
	})
};
