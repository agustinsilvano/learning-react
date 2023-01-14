const AppForm = (props) => {

    const onSubmitHandler = (event) => {
        //TODO: Investigate why this base preventDefault is not working.
        event.preventDefault();

        props.onSubmit(event);
    }

    return (
        <form onSubmit={onSubmitHandler} {...props}>
            {props.children}
        </form >
    )
}

export default AppForm;