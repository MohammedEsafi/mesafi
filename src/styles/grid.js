import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
	display: ${({ inline }) => (inline ? 'inline-grid' : 'grid')};

	${({ templateColumns }) =>
		templateColumns &&
		css`
			grid-template-columns: ${templateColumns};
		`}

	${({ templateRows }) =>
		templateRows &&
		css`
			grid-template-rows: ${templateRows};
		`}

	${({ areas }) =>
		areas &&
		css`
			grid-template-areas: ${areas};
		`}

	${({ columnGap }) =>
		columnGap &&
		css`
			column-gap: ${columnGap};
		`}

	${({ rowGap }) =>
		rowGap &&
		css`
			row-gap: ${rowGap};
		`}

	${({ gap }) =>
		gap &&
		css`
			gap: ${gap};
		`}


	${({ justifyItems }) =>
		justifyItems &&
		css`
			justify-items: ${justifyItems};
		`}

	${({ alignItems }) =>
		alignItems &&
		css`
			align-items: ${alignItems};
		`}

	${({ placeItems }) =>
		placeItems &&
		css`
			place-items: ${placeItems};
		`}

	${({ justifyContent }) =>
		justifyContent &&
		css`
			justify-content: ${justifyContent};
		`}

	${({ alignContent }) =>
		alignContent &&
		css`
			align-content: ${alignContent};
		`}

	${({ placeContent }) =>
		placeContent &&
		css`
			place-content: ${placeContent};
		`}

	${({ autoColumns }) =>
		autoColumns &&
		css`
			grid-auto-columns: ${autoColumns};
		`}

	${({ autoRows }) =>
		autoRows &&
		css`
			grid-auto-rows: ${autoRows};
		`}

	${({ column }) =>
		column &&
		css`
			grid-column: ${column};
		`}

	${({ row }) =>
		row &&
		css`
			grid-row: ${row};
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

Grid.propTypes = {
	inline: PropTypes.bool,
	templateColumns: PropTypes.string,
	templateRows: PropTypes.string,
	areas: PropTypes.string,
	columnGap: PropTypes.string,
	rowGap: PropTypes.string,
	gap: PropTypes.string,
	justifyItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
	alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
	placeItems: PropTypes.string,
	justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly']),
	alignContent: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly']),
	placeContent: PropTypes.string,
	autoColumns: PropTypes.string,
	autoRows: PropTypes.string,
	column: PropTypes.string,
	row: PropTypes.string,
	padding: PropTypes.string,
	margin: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	maxWidth: PropTypes.string,
	maxHeight: PropTypes.string
};

export default Grid;
