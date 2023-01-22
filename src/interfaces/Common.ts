import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IHasChildrenElement {
	children?: React.ReactNode;
}

export interface IHasId {
	id?: string;
}

export interface IHasTitle {
	title?: string | undefined;
	// onTitleChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface IHasType {
	type?: string;
}

export interface IHasButtonType {
	type?: 'submit' | 'reset' | 'button' | undefined;
}

export interface IHasValue {
	value?: string;
}

export interface IOnChange {
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface IOnSubmit {
	//TODO: Replace the `any` for the corresponding type.
	onSubmit?: any;
}

export interface IOnClick {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IOnSearch {
	onSearch: any;
}

export interface IIsRequired {
	isRequired?: boolean;
}
