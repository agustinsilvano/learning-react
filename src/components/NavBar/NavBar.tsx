import HomeButton from './components/HomeButton/HomeButton';
import MyProfileButton from './components/MyProfileButton/MyProfileButton';
import ThemeButton from './components/ThemeButton/ThemeButton';

const NavBar: React.FC = () => {
	return (
		<div>
			<HomeButton />
			<MyProfileButton />
			<ThemeButton />
		</div>
	);
};

export default NavBar;
