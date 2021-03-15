import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Sclera = styled.div`
	box-sizing: content-box;
	position: relative;
	display: grid;
	place-items: center;
	width: 27px;
	height: 19px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.onBackground};
	border: 1px solid ${({ theme }) => theme.onBackground};
`;

const Cornea = styled.div`
	display: grid;
	place-items: start center;
	width: 19px;
	height: 19px;
`;

const Iris = styled.div`
	width: 10px;
	height: 10px;
	background-color: ${({ theme }) => theme.background};
	border-radius: 50%;
	transition: all 0.2s ease-in-out;
`;

const Eyelashes = styled.span`
	position: absolute;
	width: 3px;
	height: 0;
	background-color: ${({ theme }) => theme.onBackground};
	bottom: 0;
	left: 50%;
	transform: translate(-50%, -25px);
	border-radius: 20px;
	transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&:before {
		content: '';
		position: absolute;
		width: 3px;
		height: 91%;
		bottom: 0;
		background-color: ${({ theme }) => theme.onBackground};
		transform: translate(-11px, 2px) rotate(-25deg);
		border-radius: 20px;
	}

	&:after {
		content: '';
		position: absolute;
		width: 3px;
		height: 91%;
		bottom: 0;
		background-color: ${({ theme }) => theme.onBackground};
		transform: translate(11px, 2px) rotate(25deg);
		border-radius: 20px;
	}
`;

const Wrapper = styled.div`
	padding: 20px;
	cursor: pointer;

	&:hover ${Eyelashes} {
		height: 7px;
	}

	&:hover ${Iris} {
		width: 80%;
		height: 80%;
	}
`;

const Logo = () => {
	const orthogonalRef = useRef(null);
	const corneaRef = useRef(null);

	useEffect(() => {
		const getAngle = (iris, cursor, orthogonal) => {
			let angle = Math.atan2(cursor.y - orthogonal.y, cursor.x - orthogonal.x) - Math.atan2(iris.y - orthogonal.y, iris.x - orthogonal.x);

			if (angle < 0) angle += 2 * Math.PI;

			return (angle * 180) / Math.PI;
		};

		const eventHandler = (event) => {
			const orthogonalRect = orthogonalRef.current.getBoundingClientRect();

			const orthogonal = {
				x: orthogonalRect.left + orthogonalRect.width / 2,
				y: orthogonalRect.top + orthogonalRect.height / 2
			};

			const transformOrigin = {
				x: orthogonalRect.left + orthogonalRect.width / 2,
				y: orthogonalRect.top
			};

			const cursor = {
				x: event.clientX,
				y: event.clientY
			};

			const angle = getAngle(transformOrigin, cursor, orthogonal);

			corneaRef.current.style.transform = `rotate(${Math.round(angle)}deg)`;
		};

		window.addEventListener('mousemove', eventHandler);

		return () => {
			window.removeEventListener('mousemove', eventHandler);
		};
	}, []);

	return (
		<Wrapper>
			<Sclera ref={orthogonalRef}>
				<Cornea ref={corneaRef}>
					<Iris />
				</Cornea>
				<Eyelashes />
			</Sclera>
		</Wrapper>
	);
};

export default Logo;
