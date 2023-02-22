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

const themeSlice = createSlice({
	name: 'theme',
	initialState: INITIAL_STATE,
	reducers: {
		updateTheme(_, action) {
			return new ThemeStoreState(action.payload);
		}
	}
});

export const themeActions = themeSlice.actions;

export const themeReducers = themeSlice.reducer;
