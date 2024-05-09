import React from 'react';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Home from './Home';
import SignIn from './SignIn';
import Footer from "./Footer";
import FilterSideBar from "./FilterSideBar";
import AdminNav from "./AdminNav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrgReqFetch from './OrgReqFetch';
import PendingOrg from './PendingOrg';
import PendingDonor from './PendingDonor';
import DonorReqFetch from './DonorReqFetch.js';
import AdminProfile from './AdminProfile.js';
import AdminFetch from './AdminFetch.js';
import ChangePassword from './ChangePassword.js';
import AdminPassFetch from './AdminPassFetch.js'
import DonorReg from './DonorReg';
import OrgReg from './OrgReg';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
                <Navbar2 />
                <Home />
            </Route>
            <Route path="/signin">
                <Navbar2 />
                <SignIn />
            </Route>
            <Route path="/donor-register">
                <Navbar2 />
                <DonorReg />
            </Route>
            <Route path="/org-register">
                <Navbar2 />
                <OrgReg />
            </Route>
            <Route path="/admin">
                <AdminNav />
            </Route>
            <Route exact path="/admin/changepass">
              <AdminPassFetch />
            </Route>
            <Route exact path ="/admin/profile">
              <AdminFetch />
            </Route>
            <Route exact path= "/admin/req/donors">
              <DonorReqFetch/>
            </Route>
            <Route exact path = "/admin/req/donors/:id">
              <PendingDonor />
            </Route>
            <Route exact path= "/admin/req/orgs">
              <OrgReqFetch />
            </Route>
            <Route exact path = "/admin/req/orgs/:id">
              <PendingOrg />
            </Route>
          </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;