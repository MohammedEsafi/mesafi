import styled from 'styled-components';

import { fontSize } from '@config';

const Button = styled.button`
	background-color: ${({ theme }) => theme.text.primary};
	color: ${({ theme }) => theme.background};
	cursor: pointer;
	border-radius: 50px;
	text-transform: uppercase;
	font-weight: 500;
	border: none;
	font-size: ${fontSize.xxs}rem;
`;

export default Button;
