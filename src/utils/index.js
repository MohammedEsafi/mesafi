export const clamping = (minWidth, maxWidth, minValue, maxValue) => {
	const slope = (maxValue - minValue) / (maxWidth - minWidth);
	const intersection = -minWidth * slope + minValue;

	return `clamp(${minValue}rem, ${intersection}rem + ${slope * 100}vw, ${maxValue}rem)`;
};
