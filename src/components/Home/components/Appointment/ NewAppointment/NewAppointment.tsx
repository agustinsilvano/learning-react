import { MutableRefObject, useRef, useState } from 'react';
import { ICreateEntity } from 'interfaces/Entity';
import { Appointment } from 'models/Appointment/Appointment';
import { CreateUpdateAppointment } from 'models/Appointment/CreateUpdateAppointment';
import AppButton from 'components/shared/AppButton/AppButton';
import AppForm from 'components/shared/AppForm/AppForm';
import AppInput from 'components/shared/AppInput/AppInput';


interface INewAppointment extends ICreateEntity { }

const NewAppointment = ({ onCreate }: INewAppointment) => {

    const [title, setTitle] = useState('');
    const [beginDate, setBeginDate] = useState('');
    const [endDate, setEndDate] = useState('');

    //using ref for learning propouses. null type was added to do ref mutable object.
    //TODO: Investigate why the useRef is not using by having the custom AppInput component.
    const typeRef = useRef<HTMLInputElement>(null);

    const onTitleChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onBeginDateChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setBeginDate(event.currentTarget.value);
    }

    const onEndDateChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setEndDate(event.currentTarget.value);
    }

    const resetInputs = () => {
        setTitle('');
        if (typeRef.current)
            typeRef.current.value = '';
        setBeginDate('');
        setEndDate('');
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        debugger
        const type: string = typeRef.current?.value ?? '';

        const createAppointment = new CreateUpdateAppointment(title, type, new Date(beginDate), new Date(endDate));

        //Call the service layer to create the appointment.
        const id: string = (Math.random() * 100).toPrecision(2);
        const appointment = new Appointment(id, title, type, new Date(beginDate), new Date(endDate));

        onCreate(appointment);

        resetInputs();
    }

    return (
        <AppForm onSubmit={onSubmitHandler}>
            <AppInput
                title="Title"
                type="text"
                value={title}
                onChange={onTitleChangeHandler}
                isRequired
            />
            <AppInput
                title="Type"
                type="text"
                ref={typeRef}
                isRequired
            />
            <AppInput
                title="Begin Date"
                type="date"
                value={beginDate?.toString()}
                onChange={onBeginDateChangeHandler}
            />
            <AppInput
                title="End Date"
                type="date"
                value={endDate?.toString()}
                onChange={onEndDateChangeHandler}
            />
            <AppButton
                type="submit"
            />
        </AppForm>
    )
}

export default NewAppointment;