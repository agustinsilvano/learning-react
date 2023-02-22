import { configureStore } from '@reduxjs/toolkit';
import { themeReducers } from 'store/theme-store';
import { userReducers } from './user-store';

const store = configureStore({
	//Use object approach to let rtk to merge all the existing reducers.
	reducer: { theme: themeReducers, user: userReducers }
});

//Check https://redux-toolkit.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;

export default store;
