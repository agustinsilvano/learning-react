import { useState } from 'react';
import { ICreateEntity } from '../../../../interfaces/Entity';
import AppButton from '../../../shared/AppButton/AppButton';
import AppForm from '../../../shared/AppForm/AppForm';
import AppInput from '../../../shared/AppInput/AppInput';

interface INewAppointment extends ICreateEntity { }

const NewAppointment = ({ onCreate }: INewAppointment) => {
    const [title, setTitle] = useState('');
    const [beginDate, setBeginDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const onTitleChangedHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onBeginDateChangedHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setBeginDate(event.currentTarget.value);
    }

    const onEndDateChangedHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setEndDate(event.currentTarget.value);
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log('Submitting...')

        debugger;

        onCreate();
    }

    return (
        <AppForm onSubmit={onSubmitHandler}>
            <AppInput
                title="Title"
                type="text"
                value={title}
                onChange={onTitleChangedHandler}
            />
            <AppInput
                title="Begin Date"
                type="date"
                value={beginDate}
                onChange={onBeginDateChangedHandler}
            />
            <AppInput
                title="End Date"
                type="date"
                value={endDate}
                onChange={onEndDateChangedHandler}
            />
            <AppButton
                type="submit"
            />
        </AppForm>
    )
}

export default NewAppointment;