import "./newdriver.css"

export default function NewDriver() {
    return (
        <div className="newDriver">
            <h1 className="newUserTitle">New Driver</h1>
            <form className="newDriverForm">
                <div className="newDriverItem">
                    <label>Username</label>
                    <input type="text" placeholder="raymond" />
                </div>
                <div className="newDriverItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Raymond Lorenzo" />
                </div>
                <div className="newDriverItem">
                    <label>Email</label>
                    <input type="email" placeholder="raymond@gmail.com" />
                </div>
                <div className="newDriverItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newDriverItem">
                    <label>Phone#</label>
                    <input type="password" placeholder="123456789" />
                </div>
                <div className="newDriverItem">
                    <label>Address</label>
                    <input type="password" placeholder="San Fernando" />
                </div>
                <div className="newDriverItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                         <input type="radio" name="gender" id="male" value="male" />
                         <label htmlFor="male">Male</label>
                         <input type="radio" name="gender" id="female" value="female" />
                         <label htmlFor="female">Female</label>
                         <input type="radio" name="gender" id="others" value="others" />
                         <label htmlFor="others">Others</label>
                    </div>
                </div>
                <div className="newDriverItem"> 
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
