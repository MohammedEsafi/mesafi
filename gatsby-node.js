const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
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
