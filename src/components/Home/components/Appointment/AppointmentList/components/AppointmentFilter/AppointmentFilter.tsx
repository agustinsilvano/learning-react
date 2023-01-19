import { ChangeEvent, useState } from 'react'
import { IOnSearch } from '../../../../../../../interfaces/Common'
import { SearchAppointment } from '../../../../../../../models/Appointment/SearchAppointment';
import AppButton from '../../../../../../shared/AppButton/AppButton';
import AppInput from '../../../../../../shared/AppInput/AppInput';
import style from './AppointmentFilter.module.scss'

interface IAppointmentFilter extends IOnSearch {
}

const AppointmentFilter = (props: IAppointmentFilter) => {

    //Following one state approach.
    const [filter, setFilter] = useState<SearchAppointment>(new SearchAppointment());

    const onFilterChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //Safe way to use the previous state (with spread operator).
        setFilter((prevState) => {
            return { ...prevState, filter: event.target.value }
        });
    }

    const onBeginDateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //Safe way to use the previous state (with spread operator).
        setFilter((prevState) => {
            return { ...prevState, beginDate: new Date(event.target.value) }
        });
    }

    const onEndDateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //Safe way to use the previous state (with spread operator).
        setFilter((prevState) => {
            return { ...prevState, endDate: new Date(event.target.value) }
        });
    }

    const onSearchHandler = () => {
        props.onSearch(filter);
    }

    return (
        <div className={style.appointment__filter} >
            <AppInput
                title='Filter'
                type='filter'
                value={filter?.filter}
                onChange={onFilterChangeHandler}
            />
            <AppInput
                title='Begin Date'
                type='date'
                value={filter?.beginDate?.toString()}
                onChange={onBeginDateChangeHandler}
            />
            <AppInput
                title='End Date'
                type='date'
                value={filter?.endDate?.toString()}
                onChange={onEndDateChangeHandler}
            />
            <AppButton
                title='Search'
                type='submit'
                onClick={onSearchHandler}
            />
        </div >
    )
}

export default AppointmentFilter;