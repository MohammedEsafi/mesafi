import { useEffect, useState } from 'react';

import { defaultTheme } from '@config';

const useMode = () => {
	const [mode, setMode] = useState(defaultTheme);

	useEffect(() => {
		const savedMode = window?.localStorage.getItem('mode');

		if (!savedMode) {
			if (window?.matchMedia?.('(prefers-color-scheme: light)').matches) setMode('light');
		} else {
			setMode(savedMode);
		}
	}, []);

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			window.localStorage.setItem('mode', 'dark');
		} else {
			setMode('light');
			window.localStorage.setItem('mode', 'light');
		}
	};

	return [mode, toggleMode];
};

export default useMode;
