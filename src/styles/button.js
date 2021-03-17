import styled from 'styled-components';

const Button = styled.button`
	background-color: ${({ theme }) => theme.text.primary};
	color: ${({ theme }) => theme.background};
	cursor: pointer;
	padding: 24px 52px;
	border-radius: 50px;
	text-transform: uppercase;
	font-weight: 600;
	border: none;
`;

export default Button;
