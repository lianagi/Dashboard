import "./sidebar.css"
import { LineStyle, Timeline, DriveEta, Store, ExitToApp} from "@material-ui/icons";
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link"> 
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        <Link to="/drivers" className="link">
                        <li className="sidebarListItem">
                            <DriveEta className="sidebarIcon"/>
                            Table List Driver
                        </li>
                        </Link>
                        <Link to="/stores" className="link">
                        <li className="sidebarListItem">
                            <Store className="sidebarIcon"/>
                            Table List Store
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <DomainVerificationIcon className="sidebarIcon"/>
                            Verification
                        </li>
                        <Link to="/login" className="link">
                        <li className="sidebarListLogOut">
                            <ExitToApp className="sidebarIcon"/>
                            Logout
                        </li>
                        </Link>
                    </ul> 
                </div>
            </div>
        </div>
    )
}
