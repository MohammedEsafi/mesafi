export const clamping = (minWidth, maxWidth, minValue, maxValue) => {
	const slope = (maxValue - minValue) / (maxWidth - minWidth);
	const intersection = -minWidth * slope + minValue;

	return `clamp(${minValue}rem, ${intersection}rem + ${slope * 100}vw, ${maxValue}rem)`;
};

export const hex2rgba = (hex, alpha = 1) => {
	const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
