const path = require('path');

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
	if (stage === 'build-html' || stage === 'develop-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /scrollreveal/,
						use: loaders.null()
					}
				]
			}
		});
	}

	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.join(__dirname, 'src', 'components'),
				'@styles': path.join(__dirname, 'src', 'styles'),
				'@utils': path.join(__dirname, 'src', 'utils'),
				'@hooks': path.join(__dirname, 'src', 'hooks'),
				'@config': path.join(__dirname, 'src', 'config')
			}
		}
	});
};
