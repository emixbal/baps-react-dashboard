import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import "../assets/sidebar.css";
import routes from "../routes"

// import components
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

//loading another screen
import RegionsDetailScreen from '../screens/regionsDetail';


class Admin extends React.Component {
    state = {
        isRedirect : false
    }
    componentDidMount(){
      if(localStorage.getItem('token')==null){
        this.setState({isRedirect:true})
      }
    }
    // get Routes
    getRoutes = routes => {
      return routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        } else {
          return null;
        }
      });
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
                  <div className="content mt-md-3">
                    <Switch>
                      <Route path={`/admin/regions/detail/:id`} component={RegionsDetailScreen} />
                      {this.getRoutes(routes)}
                      <Redirect from="/admin/" to="/admin/dashboard" />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          );
    } 
}

export default Admin;