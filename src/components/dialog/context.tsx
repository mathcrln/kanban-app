'use client';
import { createContext, useContext, useState } from 'react';

type IThemeDispatch = (themeMode: ThemeMode) => void;
type IDialogContext = { theme: Theme; themeMode: ThemeMode };

export const DialogContext = createContext<IDialogContext>({
	theme: Theme.LIGHT,
	themeMode: ThemeMode.SYSTEM,
});
export const DialogDispatchContext = createContext<IThemeDispatch>({} as IThemeDispatch);

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
	// const [theme, themeMode, selectThemeMode] = useThemeMode();
	const [dialog, setDialog] = useState<React.ReactNode | null>();

	return (
		<DialogContext.Provider value={{ theme, themeMode }}>
			<DialogDispatchContext.Provider value={selectThemeMode}>{children}</DialogDispatchContext.Provider>
		</DialogContext.Provider>
	);
}

export function useDialogContext(): [IDialogContext, IThemeDispatch] {
	const context = useContext(DialogContext);
	const selectThemeMode = useContext(DialogDispatchContext);
	return [context, selectThemeMode];
}
