import './SideBar.scss';
import AnalyticsIcon from '../../assets/analytics_icon.svg';
import MessageIcon from '../../assets/message_icon.svg';
import SettingsIcon from '../../assets/settings_icon.svg';
import TransactionsIcon from '../../assets/transactions_icon.svg';
import UserIcon from '../../assets/user_icon.svg';
import WalletIcon from '../../assets/wallet_icon.svg';



const SideBar = () => {
    return (
        <div className='sidebar_container'>
            <div className="sidebar_links_wrapper">
                <ul>
                    <li>
                        <div>
                            <img src={TransactionsIcon} alt="" />
                            <span style={{color:'#1FCB4F'}}>DashBoard</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={WalletIcon} alt="" />
                            <span>Wallet</span>
                        </div>
                        </li>
                    <li>
                        <div>
                        <img src={AnalyticsIcon} alt="" />
                        <span>Analytics</span>
                    </div>
                    </li>
                    <li>
                        <div>
                        <img src={UserIcon} alt="" />
                        <span>Personal</span>
                    </div>
                    </li>
                    <li>
                        <div>
                        <img src={MessageIcon} alt="" />
                        <span>Message</span>
                    </div>
                    </li>
                    <li>
                        <div>
                        <img src={SettingsIcon} alt="" />
                        <span>Settings</span>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar