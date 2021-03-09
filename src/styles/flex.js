import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.div`
	display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};

	${({ flexDirection }) =>
		flexDirection &&
		css`
			flex-direction: ${flexDirection};
		`}

	${({ justifyContent }) =>
		justifyContent &&
		css`
			justify-content: ${justifyContent};
		`}

	${({ flexWrap }) =>
		flexWrap &&
		css`
			flex-wrap: ${flexWrap};
		`}

	${({ alignItems }) =>
		alignItems &&
		css`
			align-items: ${alignItems};
		`}

	${({ flexGrow }) =>
		flexGrow &&
		css`
			flex-grow: ${flexGrow};
		`}

	${({ flexShrink }) =>
		flexShrink &&
		css`
			flex-shrink: ${flexShrink};
		`}


	${({ flexBasis }) =>
		flexBasis &&
		css`
			flex-basis: ${flexBasis};
		`}

	${({ flex }) =>
		flex &&
		css`
			flex: ${flex};
		`}

	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}

	${({ margin }) =>
		margin &&
		css`
			margin: ${margin};
		`}

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}

	${({ height }) =>
		height &&
		css`
			height: ${height};
		`}

	${({ maxWidth }) =>
		maxWidth &&
		css`
			maxwidth: ${maxWidth};
		`}

	${({ maxHeight }) =>
		maxHeight &&
		css`
			maxheight: ${maxHeight};
		`}
`;

Flex.propTypes = {
	inline: PropTypes.bool,
	flexDirection: PropTypes.oneOf(['row', 'column']),
	justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'initial', 'inherit']),
	flexWrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
	alignItems: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']),
	flexGrow: PropTypes.number,
	flexShrink: PropTypes.number,
	flexBasis: PropTypes.number,
	flex: PropTypes.string,
	padding: PropTypes.string,
	margin: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	maxWidth: PropTypes.string,
	maxHeight: PropTypes.string
};

export default Flex;
