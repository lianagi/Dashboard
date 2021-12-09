import React from 'react'
import "./topbar.css";
import { Notifications, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Car'NApp Admin</span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                    <Notifications/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>
                    <img src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="" className="topAvatar" />
                  
                </div>
            </div>
            
        </div>
    )
}
