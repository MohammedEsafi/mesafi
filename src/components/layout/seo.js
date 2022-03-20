import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						image
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;
	const defaultImage = site.siteMetadata?.image;

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title || defaultTitle}
			meta={[
				{
					name: 'description',
					content: metaDescription
				},
				{
					name: 'image',
					content: defaultImage
				},
				{
					property: 'og:title',
					content: title
				},
				{
					property: 'og:description',
					content: metaDescription
				},
				{
					property: 'og:image',
					content: defaultImage
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					name: 'twitter:card',
					content: 'summary'
				},
				{
					name: 'twitter:creator',
					content: site.siteMetadata?.author || ''
				},
				{
					name: 'twitter:title',
					content: title
				},
				{
					name: 'twitter:description',
					content: metaDescription
				},
				{
					name: 'twitter:image',
					content: defaultImage
				},
				{
					name: 'yandex-verification',
					content: '19641e31bfdc3e06'
				}
			].concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: 'en',
	meta: [],
	description: ''
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired
};

export default SEO;
