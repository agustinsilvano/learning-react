export interface ICreateEntity {
	onCreate?: any;
}

export interface IReadEntity<T> {
	onRead?: any;
	items: T[];
}

export interface IUpdateEntity {
	onUpdate?: any;
}

export interface IDeleteEntity {
	onDelete?: any;
}

export interface ICrudEntity<T> extends ICreateEntity, IReadEntity<T>, IUpdateEntity, IDeleteEntity {}
