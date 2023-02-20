import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from 'store/theme-store';
import { userSlice } from './user-store';

const store = configureStore({
	//Use object approach to let rtk to merge all the existing reducers.
	reducer: { theme: themeSlice.reducer, user: userSlice.reducer }
});

//Check https://redux-toolkit.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;

export default store;
