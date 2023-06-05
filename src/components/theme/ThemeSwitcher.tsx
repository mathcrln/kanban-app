'use client';

import { MoonIcon } from '../icons/MoonIcon';
import { SunIcon } from '../icons/SunIcon';
import { useThemeContext } from './context';
import { ThemeMode } from './hooks/useThemeMode';

export function ThemeSwitcher() {
	const [{ themeMode }, selectThemeMode] = useThemeContext();
	return (
		<div className='gap-12 dark:bg-very-dark-gray dark:text-white flex items-center justify-center bg-light-gray rounded-lg py-2 px-3'>
			<button onClick={() => selectThemeMode(ThemeMode.LIGHT)}>
				<SunIcon />
			</button>
			<button onClick={() => selectThemeMode(ThemeMode.DARK)}>
				<MoonIcon />
			</button>
		</div>
	);
}
