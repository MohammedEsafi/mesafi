import ScrollReveal from 'scrollreveal';

const clamping = (minWidth, maxWidth, minValue, maxValue) => {
	const slope = (maxValue - minValue) / (maxWidth - minWidth);
	const intersection = -minWidth * slope + minValue;

	return `clamp(${minValue}rem, ${intersection}rem + ${slope * 100}vw, ${maxValue}rem)`;
};

const isSSR = typeof window === 'undefined';

const sr = isSSR ? null : ScrollReveal();

export { clamping, isSSR, sr };
