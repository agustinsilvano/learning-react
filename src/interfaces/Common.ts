export interface IHasChildrenElement {
	children?: React.ReactNode;
}

export interface IHasId {
	id?: string;
}

export interface IHasTitle {
	title?: string | undefined;
}

export interface IHasType {
	type?: string;
}

export interface IHasInputType {
	type?:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
}

export interface IHasButtonType {
	type?: 'submit' | 'reset' | 'button' | undefined;
}

export interface IHasValue {
	value?: string;
}

export interface IIsRequired {
	isRequired?: boolean;
}

export interface IOnChange {
	onChangeCustom?: (event: any) => void;
}

export interface IOnSubmit {
	onSubmitCustom?: (event: any) => void;
}

export interface IOnClick {
	onClickCustom?: (event: any) => void;
}

export interface IOnSearch {
	onSearch?: (params: any) => void;
}

export interface IOnBlur {
	onBlurCustom?: () => void;
}
