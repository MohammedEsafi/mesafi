import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
	padding: 0;
	position: relative;
	width: 40px;
	height: 40px;
`;

const Content = styled.span`
	position: absolute;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 50%;
	display: block;
	width: 4px;
	height: 4px;
	background-color: ${({ theme }) => theme.onBackground};
	box-shadow: calc(4px * -1) calc(4px * -1) ${({ theme }) => theme.onBackground}, calc(4px * 1) calc(4px * -1) #edd892,
		calc(4px * -2) calc(4px * -2) ${({ theme }) => theme.onBackground}, calc(4px * 2) calc(4px * -2) ${({ theme }) => theme.onBackground},
		calc(4px * -3) calc(4px * -3) #fcb97d, calc(4px * -4) calc(4px * 1) #fcb97d, calc(4px * -4) calc(4px * 2) #fcb97d, calc(4px * -4) calc(4px * 3) #edd892,
		calc(4px * -4) calc(4px * 4) ${({ theme }) => theme.onBackground}, calc(4px * -3) calc(4px * 0) #fcb97d, calc(4px * -3) calc(4px * 1) #edd892,
		calc(4px * -3) calc(4px * 2) #edd892, calc(4px * -3) calc(4px * 3) ${({ theme }) => theme.onBackground},
		calc(4px * -3) calc(4px * 4) ${({ theme }) => theme.onBackground}, calc(4px * -1) calc(4px * 1) ${({ theme }) => theme.onBackground},
		calc(4px * -2) calc(4px * 2) ${({ theme }) => theme.onBackground}, calc(4px * 3) calc(4px * -3) #fcb97d,
		calc(4px * 1) calc(4px * 1) ${({ theme }) => theme.onBackground}, calc(4px * 2) calc(4px * 2) #fcb97d,
		calc(4px * 3) calc(4px * 0) ${({ theme }) => theme.onBackground}, calc(4px * 3) calc(4px * 1) ${({ theme }) => theme.onBackground},
		calc(4px * 3) calc(4px * 2) ${({ theme }) => theme.onBackground}, calc(4px * 3) calc(4px * 3) #fcb97d,
		calc(4px * 3) calc(4px * 4) ${({ theme }) => theme.onBackground}, calc(4px * 4) calc(4px * 1) ${({ theme }) => theme.onBackground},
		calc(4px * 4) calc(4px * 2) ${({ theme }) => theme.onBackground}, calc(4px * 4) calc(4px * 3) ${({ theme }) => theme.onBackground},
		calc(4px * 4) calc(4px * 4) #edd892, calc(4px * -4) calc(4px * -4) #fcb97d, calc(4px * 4) calc(4px * -4) ${({ theme }) => theme.onBackground},
		calc(4px * 0) calc(4px * -1) #edd892, calc(4px * 0) calc(4px * -2) ${({ theme }) => theme.onBackground},
		calc(4px * 0) calc(4px * 1) ${({ theme }) => theme.onBackground}, calc(4px * -2) calc(4px * 0) ${({ theme }) => theme.onBackground},
		calc(4px * 2) calc(4px * 0) #edd892, calc(4px * 2) calc(4px * -1) #edd892, calc(4px * 2) calc(4px * 1) ${({ theme }) => theme.onBackground},
		calc(4px * -2) calc(4px * -1) ${({ theme }) => theme.onBackground}, calc(4px * -2) calc(4px * 1) ${({ theme }) => theme.onBackground};
`;

const Brand = () => (
	<Wrapper to='/' aria-label='home'>
		<Content />
	</Wrapper>
);

export default Brand;
