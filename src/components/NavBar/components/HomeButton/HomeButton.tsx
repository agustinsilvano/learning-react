import './HomeButton.module.scss';
import AppButton from '../../../shared/AppButton/AppButton';
import { Component, ReactNode } from 'react';

interface HomeButtonProps {}

interface HomeButtonState {
	counter: number;
	value: string;
}

class HomeButton extends Component<HomeButtonProps, HomeButtonState> {
	/**
	 *
	 */
	constructor(props: HomeButtonProps, state: HomeButtonState) {
		super(props, state);
		this.state = {
			value: 'inmutable value',
			counter: 0
		};
	}

	counterHandler() {
		this.setState((currState) => {
			return { counter: currState.counter + 1 };
		});
		console.log('Current counter:' + this.state.counter);
	}

	//Equivalent to useEffect(...,[])
	componentDidMount(): void {}

	//Equivalent to useEffect(...,[someValue])
	componentDidUpdate(prevProps: Readonly<HomeButtonProps>, prevState: Readonly<HomeButtonState>, snapshot?: any): void {
		//Circular counter, from 0 to 9.
		if (prevState.counter === 9) {
			this.setState({ counter: 0 });
		}

		if (prevState.counter % 2 === 0) console.log('Even counter');
	}

	//Equivalent to the clean-up function (useEffect(()=>{return () => {...}},[]))
	componentWillUnmount(): void {}

	render(): ReactNode {
		return <AppButton title="Home" onClickCustom={this.counterHandler.bind(this)} />;
	}
}

//Commenting out the functional component as we are using class based components just for learning proposes.
// const HomeButton: React.FC = () => {
//     const onClick = () => {
//         console.log("hey!")
//     }

//     return (
//         <AppButton
//             title='Home'
//             onClick={onClick} />
//     )
// }

export default HomeButton;
