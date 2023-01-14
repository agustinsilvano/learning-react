import { useState } from 'react';
import AppButton from '../../../shared/AppButton/AppButton';
import AppForm from '../../../shared/AppForm/AppForm';
import AppInput from '../../../shared/AppInput/AppInput';

const NewAppointment = (props) => {
    const [title, setTitle] = useState('');
    const [beginDate, setBeginDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const onTitleChangedHandler = (event) => {
        setTitle(event.target.value);
    }

    const onBeginDateChangedHandler = (event) => {
        setBeginDate(event.target.value);
    }

    const onEndDateChangedHandler = (event) => {
        setEndDate(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Submitting...')

        debugger;

        props.onSaveHandler()
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