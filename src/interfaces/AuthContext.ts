export interface IAuthContext {
	userId: string | null;
	roles: string[];
	isAuthenticated: boolean;
	onLogin: (s: string) => void;
	onLogout: () => void;
}
