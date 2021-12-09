import "./store.css"
import { Call, Email, Home, PermIdentity, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function Store() {
    return (
        <div className="store">
            <div className="storeTitleContainer">
                <h1 className="storeTitle">Store</h1>
                <Link to="/newStore">
                <button className="storeAddButton">Create</button>
                </Link>
            </div>

            <div className="storeContainer">
                <div className="storeShow">
                    <div className="storeShotTop">
                        <img src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                         alt=""
                        className="storeShowImg" />
                        <div className="storeShowTopTitle">
                            <span className="storeShowUsername">PatrickStore</span>
                            <span className="storeShowUserTitle">Talyer</span>
                        </div>
                    </div>
                    <div className="storeShotBottom">
                        <span className="storeUserTitle">Account Details</span>
                        <div className="storeShowInfo">
                             <PermIdentity className="storeShowIcon"/>
                             <span className="storeShowInfoTitle">PatrickStore</span>
                        </div>
                        <div className="storeShowInfo">
                             <Email className="storeShowIcon"/>
                             <span className="storeShowInfoTitle">patrick@gmail.com</span>
                        </div>
                        <span className="storeUserTitle">Contact Details</span>
                        <div className="storeShowInfo">
                             <Call className="storeShowIcon"/>
                             <span className="storeShowInfoTitle">09123456789</span>
                        </div>
                      
                    </div>
                </div>
                <div className="storeUpdate">
                    <span className="storeUpdateTitle">Edit</span>
                    <form  className="storeUpdateForm">
                        <div className="storeUpdateLeft">
                            <div className="storeUpdateItem">
                                <label>Store Name</label>
                                <input type="text" 
                                placeholder="PatrickStore"
                                className="storeUpdateInput"/>
                            </div>
                            <div className="storeUpdateItem">
                                <label>Email</label>
                                <input type="text" 
                                placeholder="patrick@gmail.com"
                                className="storeUpdateInput"/>
                            </div>
                            <div className="storeUpdateItem">
                                <label>Contact#</label>
                                <input type="text" 
                                placeholder="09123456789"
                                className="storeUpdateInput"/>
                            </div>
                        </div>
                        <div className="storeUpdateRight">
                            <div className="storeUpdateUpload">
                                <img className="storeUpdateImg" src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                                 alt="" />
                                 <label  htmlFor="file">
                                     <Publish className="storeUpdateIcon" />
                                     </label>
                                 <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="storeUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
