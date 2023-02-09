import { useState } from 'react';
import { ICreateEntity } from 'interfaces/Entity';
import { Appointment } from 'models/Appointment/Appointment';
import { CreateUpdateAppointment } from 'models/Appointment/CreateUpdateAppointment';
import AppButton from 'components/shared/AppButton/AppButton';
import AppForm from 'components/shared/AppForm/AppForm';
import AppInput from 'components/shared/AppInput/AppInput';
import { APPOINTMENT_TYPES_LIST } from 'helpers/Appointment/AppointmentTypes';

interface INewAppointment extends ICreateEntity {}

const NewAppointment: React.FC<INewAppointment> = (props: INewAppointment) => {
	const [title, setTitle] = useState('');
	const [type, setType] = useState('');
	const [beginDate, setBeginDate] = useState('');
	const [endDate, setEndDate] = useState('');

	//using ref for learning propouses. null value was added to do ref mutable object.
	// const typeRef = useRef<HTMLInputElement>(null);

	const onTitleChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value);
	};

	const onTypeChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setType(event.currentTarget.value);
	};

	const onBeginDateChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setBeginDate(event.currentTarget.value);
	};

	const onEndDateChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setEndDate(event.currentTarget.value);
	};

	const resetInputs = () => {
		setTitle('');
		// if (typeRef.current) typeRef.current.value = '';
		setType('');
		setBeginDate('');
		setEndDate('');
	};

	const onSubmitHandler = (event: React.FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		// const type: string = typeRef.current?.value ?? '';

		const createAppointment = new CreateUpdateAppointment(title, type, new Date(beginDate), new Date(endDate));

		//Call the service layer to create the appointment.
		const id: string = (Math.random() * 100).toPrecision(2);
		const appointment = new Appointment(id, title, type, new Date(beginDate), new Date(endDate));

		if (Math.random() < 0.5) {
			throw new Error('Something went wrong, try again later...');
		}

		props.onCreate(appointment);

		resetInputs();
	};

	//Function used to validate the title input, checks if title input starts with upper case char.
	const titleValidator = (s: string): boolean => {
		return s.charAt(0) === s.charAt(0).toUpperCase();
	};

	//Function used to validate the type input, checks if the type value is included on the existing list.
	const typeValidator = (s: string): boolean => {
		return APPOINTMENT_TYPES_LIST.some((v) => v.VALUE === s);
	};

	return (
		<AppForm onSubmitCustom={onSubmitHandler}>
			<AppInput
				title="Title"
				type="text"
				value={title}
				onChangeCustom={onTitleChangeHandler}
				validator={titleValidator}
				isRequired={true}
			/>
			<AppInput
				title="Type"
				type="text"
				value={type}
				onChangeCustom={onTypeChangeHandler}
				validator={typeValidator}
				isRequired={true}
			/>
			<AppInput
				title="Begin Date"
				type="date"
				value={beginDate?.toString()}
				onChangeCustom={onBeginDateChangeHandler}
			/>
			<AppInput title="End Date" type="date" value={endDate?.toString()} onChangeCustom={onEndDateChangeHandler} />
			<AppButton type="submit" />
		</AppForm>
	);
};

export default NewAppointment;
