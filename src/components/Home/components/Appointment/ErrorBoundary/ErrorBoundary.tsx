import { Component, ErrorInfo, ReactNode } from 'react';
import { IHasChildrenElement } from 'interfaces/Common';
import AppToaster from 'components/shared/AppToaster/AppToaster';

interface IAppointmentErrorBoundaryProps extends IHasChildrenElement {

}
interface IAppointmentErrorBoundaryState {
    hasError: boolean;
    errorMessage: string;
}

class AppointmentErrorBoundary extends Component<IAppointmentErrorBoundaryProps, IAppointmentErrorBoundaryState>{
    /**
     *
     */
    constructor(props: IAppointmentErrorBoundaryProps, state: IAppointmentErrorBoundaryState) {
        super(props, state);
        this.state = { hasError: false, errorMessage: '' };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        debugger;
        this.setState(() => { return { hasError: true, errorMessage: error.message } });
    }

    render(): ReactNode {
        debugger;
        if (this.state.hasError) {
            return <AppToaster isError={this.state.hasError} description={this.state.errorMessage}></AppToaster>
        }
        return this.props.children;
    }
}

export default AppointmentErrorBoundary;