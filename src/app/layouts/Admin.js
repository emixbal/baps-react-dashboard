import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// import static
import "../assets/sidebar.css";

// import components
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

// import screen
import DashboardScreen from '../screens/DashboardScreen';

class Admin extends React.Component {
    state = {
        isRedirect : false
    }
    render(){
        if(this.state.isRedirect){
            return <Redirect to={"/auth"} />
        }
        return (
            <div className="d-flex" id="wrapper">
              {/* Sidebar */}
              <AdminSidebar />
              {/* /#sidebar-wrapper */}
              {/* Page Content */}
              <div id="page-content-wrapper">
                {/* nav start */}
                <AdminHeader />
                {/* nav end */}
                <div className="container-fluid">
                  <Switch>
                    <Route exac path={'/admin/dashboard'} component={DashboardScreen} key="1" />
                    <Route path={'/admin/regions'} component={DashboardScreen} key="2" />
                    <Redirect from="/admin/" to="/admin/dashboard" />
                  </Switch>
                </div>
              </div>
            </div>
          );
    } 
}

export default Admin;