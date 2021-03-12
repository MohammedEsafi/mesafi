import React from 'react';
import styled from 'styled-components';

import { email } from '@config';
import Icons from '@components/icons';

const Wrapper = styled.a`
	color: ${({ theme }) => theme.onBackground};
	display: flex;
	align-items: center;

	&:hover {
		& > div > div:first-child {
			top: -60px;
		}

		& > div > div:last-child {
			top: 0;
		}
	}
`;

const IconContainer = styled.div`
	position: relative;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.onBackground};
	overflow: hidden;
	margin-right: 20px;

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		transition: 120ms ease-out;
	}

	& > div:first-child {
		top: 0;
	}

	& > div:last-child {
		top: 60px;
	}
`;

const Email = () => (
	<Wrapper href={`mailto:${email}`}>
		<IconContainer>
			<div>
				<Icons name='mail' />
			</div>
			<div>
				<Icons name='arrow' />
			</div>
		</IconContainer>
		<span>{email}</span>
	</Wrapper>
);

export default Email;
