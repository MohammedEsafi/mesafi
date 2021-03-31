const config = require('./src/config');

const { siteTitle: title, siteDescription: description, author, image } = config;

module.exports = {
	siteMetadata: {
		title,
		description,
		author,
		image
	},
	flags: {
		DEV_SSR: false
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Mohammed Esafi — ✌️Software Engineer`,
				short_name: `Mohammed Esafi`,
				start_url: `/`,
				background_color: `#0b0c0d`,
				theme_color: `#fcb97d`,
				display: `standalone`,
				icon: `src/images/icon.png`,
				icon_options: {
					purpose: `maskable any`
				}
			}
		},
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: ['GA-TRACKING_ID', 'G-8E03D9EQQX']
			}
		}
	]
};
