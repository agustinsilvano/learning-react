import { Themes } from 'helpers/themes';
import { createSlice } from '@reduxjs/toolkit';

export class ThemeStoreState {
	name: Themes;

	/**
	 *
	 */
	constructor(name: Themes) {
		this.name = name;
	}
}

const INITIAL_STATE = new ThemeStoreState('light');

export const themeSlice = createSlice({
	name: 'theme',
	initialState: INITIAL_STATE,
	reducers: {
		updateTheme(_, action) {
			return new ThemeStoreState(action.payload);
		}
	}
});

export const themeActions = themeSlice.actions;

// const themeStore = configureStore({
// 	//Use object approach to let rtk to merge all the existing reducers.
// 	reducer: { theme: themeSlice.reducer }
// });

// //Check https://redux-toolkit.js.org/usage/usage-with-typescript
// export type RootState = ReturnType<typeof themeStore.getState>;

// export default themeStore;
