import { createSlice } from '@reduxjs/toolkit';

export class UserState {
	userId: string;
	roles: string[];
	isAuthenticated: boolean;

	/**
	 *
	 */
	constructor(userId: string, roles: string[], isAuthenticated: boolean) {
		this.userId = userId;
		this.roles = roles;
		this.isAuthenticated = isAuthenticated;
	}
}

const INITIAL_STATE = new UserState('', [], false);

const userSlice = createSlice({
	name: 'user',
	initialState: INITIAL_STATE,
	reducers: {
		login(_, action) {
			debugger;
			return new UserState(action.payload.userId, action.payload.roles, true);
		},
		logout(_) {
			return INITIAL_STATE;
		}
	}
});

//Export the user actions.
export const userActions = userSlice.actions;

//Export the user reducers.
export const userReducers = userSlice.reducer;
