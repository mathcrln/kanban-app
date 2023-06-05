import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import useMediaQueries from './useMediaQueries';

export enum ThemeMode {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

const useThemeMode = (): Readonly<[Theme, ThemeMode, (themeMode: ThemeMode) => void]> => {
	const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
	const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.SYSTEM);

	const prefersDarkMode = useMediaQueries(['(prefers-color-scheme: dark)'], [true], false);

	const selectThemeMode = (mode: ThemeMode) => {
		try {
			switch (mode) {
				case ThemeMode.LIGHT:
					setTheme(Theme.LIGHT);
					document.documentElement.classList.remove('dark');
					window.localStorage.setItem('theme', 'light');
					break;
				case ThemeMode.DARK:
					setTheme(Theme.DARK);
					document.documentElement.classList.add('dark');
					window.localStorage.setItem('theme', 'dark');
					break;
				case ThemeMode.SYSTEM:
					window.localStorage.removeItem('theme');
					break;
				default:
					setTheme(Theme.LIGHT);
					break;
			}
		} catch (error) {
			toast.error(`Le thème n'a pas été enregistré. \n Activez les cookies pour y remédier.`, {
				id: 'theme-mode-error',
				style: {
					color: 'white',
					backgroundColor: '#0F1216',
					border: '1px solid gray',
				},
			});
		}
		setThemeMode(mode);
	};

	useEffect(() => {
		let localTheme: string | null = null;
		try {
			localTheme = window.localStorage.getItem('theme');
		} catch (e) {}

		if (localTheme === Theme.LIGHT) {
			setThemeMode(ThemeMode.LIGHT);
			setTheme(Theme.LIGHT);
			document.documentElement.classList.remove('dark');
		} else if (localTheme === Theme.DARK) {
			setThemeMode(ThemeMode.DARK);
			setTheme(Theme.DARK);
			document.documentElement.classList.add('dark');
		} else if (!localTheme && themeMode === ThemeMode.SYSTEM && prefersDarkMode) {
			document.documentElement.classList.add('dark');
			setTheme(Theme.DARK);
		} else {
			if (themeMode === ThemeMode.DARK) {
				document.documentElement.classList.add('dark');
				setTheme(Theme.DARK);
			} else {
				document.documentElement.classList.remove('dark');
				setTheme(Theme.LIGHT);
			}
		}
	}, [prefersDarkMode, themeMode]);

	return [theme, themeMode, selectThemeMode];
};

export default useThemeMode;
