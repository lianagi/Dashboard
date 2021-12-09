import './newStore.css'

export default function NewStore() {
    return (
        <div className="newStore">
            <h1 className="newUserTitle">New Store</h1>
            <form className="newStoreForm">
                <div className="newStoreItem">
                    <label>Username</label>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="newStoreItem">
                    <label>Store Name</label>
                    <input type="text" placeholder="Store Name" />
                </div>
                <div className="newStoreItem">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="newStoreItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newStoreItem">
                    <label>Phone#</label>
                    <input type="password" placeholder="Phone" />
                </div>
                <div className="newStoreItem">
                    <label>Address</label>
                    <input type="password" placeholder="Address" />
                </div>
                <div className="newStoreItem"> 
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option  value="no">No</option>
                 </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
