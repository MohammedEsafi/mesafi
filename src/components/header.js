import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
	width: 100%;
	max-width: var(--max-width);
	padding: var(--padding);
	background-color: red;
`;

const Header = () => (
	<Wrapper>
		<p>Header</p>
	</Wrapper>
);

// Header.propTypes = {
// 	siteTitle: PropTypes.string
// };

// Header.defaultProps = {
// 	siteTitle: ``
// };

export default Header;
