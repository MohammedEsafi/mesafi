module.exports = {
	siteTitle: 'Hi I\'m Mohammed 👋',
	siteDescription:
		'Mohammed Esafi is a software engineer based in Morocco, MA who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
	siteUrl: 'https://mesafi.com',
	siteLanguage: 'en',
	name: 'Mohammed Esafi',
	author: '@MohammedEsafi',
	defaultTheme: 'dark',
	email: 'hello@mesafi.com',
	image: '/og.png', // path to your image, placed in the 'static' folder
	navLinks: [
		{
			name: 'About',
			url: '/#about'
		},
		{
			name: 'Work',
			url: '/#work'
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
			name: 'Dribbble',
			url: 'https://dribbble.com/MohammedEsafi'
		},
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/MohammedEsafi'
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
