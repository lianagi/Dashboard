import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import DriverList from "./pages/DriverList/DriverList";
import Driver from "./pages/DriverPage/Driver";
import NewDriver from "./pages/newDriver/NewDriver";
import StoreList from "./pages/StoreList/StoreList";
import Store from "./pages/Store/Store"
import NewStore from "./pages/newStore/NewStore";
import Login from "./components/LoginandRegister/Login";
import Register from "./components/LoginandRegister/Register";
function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
        </Route>
        <Route path="/drivers">
            <DriverList />
        </Route>
        <Route path="/driver/:userId">
            <Driver />
        </Route>
        <Route path="/newDriver">
            <NewDriver />
        </Route>
        <Route path="/stores">
            <StoreList />
        </Route>
        <Route path="/store/:storeId">
            <Store />
        </Route>
        <Route path="/newStore">
            <NewStore />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
