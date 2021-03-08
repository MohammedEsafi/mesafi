const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.join(__dirname, 'src', 'components'),
				'@styles': path.join(__dirname, 'src', 'styles'),
				// '@widgets': path.join(__dirname, 'src', 'widgets'),
				'@fonts': path.join(__dirname, 'src', 'fonts'),
				// '@config': path.join(__dirname, 'src', 'config'),
				'@utils': path.join(__dirname, 'src', 'utils'),
				'@hooks': path.join(__dirname, 'src', 'hooks')
			}
		}
	});
};
