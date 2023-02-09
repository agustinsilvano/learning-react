import { ChangeEvent, useState } from 'react';
import { IOnSearch } from 'interfaces/Common';
import { SearchAppointment } from 'models/Appointment/SearchAppointment';
import AppButton from 'components/shared/AppButton/AppButton';
import AppInput from 'components/shared/AppInput/AppInput';
import style from './AppointmentFilter.module.scss';
import React from 'react';

interface IAppointmentFilter extends IOnSearch {}

const AppointmentFilter: React.FC<IAppointmentFilter> = (props: IAppointmentFilter) => {
	//Following one state approach.
	const [filter, setFilter] = useState<SearchAppointment>(new SearchAppointment());

	const onFilterChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		//Safe way to use the previous state (with spread operator).
		setFilter((prevState) => {
			return { ...prevState, filter: event.target.value };
		});
	};

	const onBeginDateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		//Safe way to use the previous state (with spread operator).
		setFilter((prevState) => {
			return { ...prevState, beginDate: new Date(event.target.value) };
		});
	};

	const onEndDateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		//Safe way to use the previous state (with spread operator).
		setFilter((prevState) => {
			return { ...prevState, endDate: new Date(event.target.value) };
		});
	};

	const onSearchHandler = () => {
		props.onSearch && props.onSearch(filter);
	};

	return (
		<div className={style['appointment__filter']}>
			<AppInput title="Filter" type="text" value={filter?.filter} onChangeCustom={onFilterChangeHandler} />
			<AppInput
				title="Begin Date"
				type="date"
				value={filter?.beginDate?.toString()}
				onChangeCustom={onBeginDateChangeHandler}
			/>
			<AppInput
				title="End Date"
				type="date"
				value={filter?.endDate?.toString()}
				onChangeCustom={onEndDateChangeHandler}
			/>
			<AppButton title="Search" type="submit" onClickCustom={onSearchHandler} />
		</div>
	);
};

export default React.memo(AppointmentFilter);
