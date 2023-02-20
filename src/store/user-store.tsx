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

export const userSlice = createSlice({
	name: 'user',
	initialState: INITIAL_STATE,
	reducers: {
		login(state, action) {
			return new UserState(action.payload.userId, action.payload.roles, true);
		},
		logout(state) {
			return INITIAL_STATE;
		}
	}
});

export const userActions = userSlice.actions;
