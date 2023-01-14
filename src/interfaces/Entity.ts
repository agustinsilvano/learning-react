export interface ICreateEntity {
	onCreate?: any;
}

export interface IReadEntity {
	onRead?: any;
}

export interface IUpdateEntity {
	onUpdate?: any;
}

export interface IDeleteEntity {
	onDelete?: any;
}

export interface ICrudEntity extends ICreateEntity, IReadEntity, IUpdateEntity, IDeleteEntity {}
