'use client';
import { createContext, useContext } from 'react';
import useThemeMode, { ThemeMode, Theme } from '../hooks/useThemeMode';

type IThemeDispatch = (themeMode: ThemeMode) => void;
type IThemeContext = { theme: Theme; themeMode: ThemeMode };

export const ThemeContext = createContext<IThemeContext>({
	theme: Theme.LIGHT,
	themeMode: ThemeMode.SYSTEM,
});
export const ThemeDispatchContext = createContext<IThemeDispatch>({} as IThemeDispatch);

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
	const [theme, themeMode, selectThemeMode] = useThemeMode();

	return (
		<ThemeContext.Provider value={{ theme, themeMode }}>
			<ThemeDispatchContext.Provider value={selectThemeMode}>{children}</ThemeDispatchContext.Provider>
		</ThemeContext.Provider>
	);
}

export function useThemeContext(): [IThemeContext, IThemeDispatch] {
	const context = useContext(ThemeContext);
	const selectThemeMode = useContext(ThemeDispatchContext);
	return [context, selectThemeMode];
}
