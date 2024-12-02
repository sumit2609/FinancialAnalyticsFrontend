import './Header.scss';
import Logo from '../../assets/Logo.svg';
import NotificationIcon from '../../assets/Notification.svg';
import ProfileImage from '../../assets/profile.svg';

const Navbar = () => {
  return (
    <nav>
        <div className="nav_left_wrapper">
           <div className="nav_logo">
                <img src={Logo} alt="Logo" />
           </div>
        </div> 
        <div className="nav_right_wrapper">
            <div className="nav_right_elements_container">
                     <h2>Dashboard</h2>
                    <div className="nav_right_elements">
                      {/* SearchBar */}
                      <img src={NotificationIcon} alt="notification_icon" />
                      <img src={ProfileImage} alt="profile_image" />
                    </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar;