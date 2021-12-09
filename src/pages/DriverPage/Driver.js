import "./driver.css"
import { Call, Email, Home, PermIdentity, Publish } from "@material-ui/icons"
import { Link } from 'react-router-dom'

export default function Driver() {
    return (
        <div className="driver">
            <div className="userTitleContainer">
                <h1 className="driverTitle">Edit Driver</h1>
                <Link to="/newDriver">
                     <button className="driverAddButton">Create</button> 
                </Link>
             
            </div>
            <div className="driverContainer">
                <div className="driverShow">
                    <div className="driverShotTop">
                        <img src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                         alt=""
                        className="driverShowImg" />
                        <div className="driverShowTopTitle">
                            <span className="driverShowUsername">Patrick</span>
                            <span className="driverShowUserTitle">Web Developer</span>
                        </div>
                    </div>
                    <div className="driverShotBottom">
                        <span className="driverUserTitle">Account Details</span>
                        <div className="driverShowInfo">
                             <PermIdentity className="driverShowIcon"/>
                             <span className="driverShowInfoTitle">Patrick69</span>
                        </div>
                        <div className="driverShowInfo">
                             <Email className="driverShowIcon"/>
                             <span className="driverShowInfoTitle">patrick@gmail.com</span>
                        </div>
                        <span className="driverUserTitle">Contact Details</span>
                        <div className="driverShowInfo">
                             <Call className="driverShowIcon"/>
                             <span className="driverShowInfoTitle">09123456789</span>
                        </div>
                        <div className="driverShowInfo">
                             <Home className="driverShowIcon"/>
                             <span className="driverShowInfoTitle">Apalit</span>
                        </div>
                    </div>
                </div>
                <div className="driverUpdate">
                    <span className="driverUpdateTitle">Edit</span>
                    <form  className="driverUpdateForm">
                        <div className="driverUpdateLeft">
                            <div className="driverUpdateItem">
                                <label>Username</label>
                                <input type="text" 
                                placeholder="Patrick69"
                                className="driverUpdateInput"/>
                            </div>
                            <div className="driverUpdateItem">
                                <label>Fullname</label>
                                <input type="text" 
                                placeholder="Patrick"
                                className="driverUpdateInput"/>
                            </div>
                            <div className="driverUpdateItem">
                                <label>Email</label>
                                <input type="text" 
                                placeholder="patrick@gmail.com"
                                className="driverUpdateInput"/>
                            </div>
                            <div className="driverUpdateItem">
                                <label>Contact#</label>
                                <input type="text" 
                                placeholder="09123456789"
                                className="driverUpdateInput"/>
                            </div>
                            <div className="driverUpdateItem">
                                <label>Address</label>
                                <input type="text" 
                                placeholder="Apalit"
                                className="driverUpdateInput"/>
                            </div>
                        </div>
                        <div className="driverUpdateRight">
                            <div className="driverUpdateUpload">
                                <img className="driverUpdateImg" src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                                 alt="" />
                                 <label  htmlFor="file">
                                     <Publish className="driverUpdateIcon" />
                                     </label>
                                 <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="driverUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
