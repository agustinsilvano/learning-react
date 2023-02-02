export type InputValidator = {
	(s: string): boolean;
};

export function DefaultInputValidator(s: string): boolean {
	return s?.trim().length !== 0;
}
