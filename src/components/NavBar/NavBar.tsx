import HomeButton from './components/HomeButton/HomeButton';
import MyProfileButton from './components/MyProfileButton/MyProfileButton';

const NavBar: React.FC = () => {

    return (
        <div>
            <HomeButton />
            <MyProfileButton />
        </div>
    )
}

export default NavBar;