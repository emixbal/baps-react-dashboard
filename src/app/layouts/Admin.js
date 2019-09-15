import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";

// import static
import "../assets/sidebar.css"

function Detail(){
  return(
    <div>
      <h1>detail here</h1>
    </div>
  )
}

function Region(){
  return(
    <div>
      <h1>region here</h1>
    </div>
  )
}

class Admin extends React.Component {
    state = {
        isRedirect : false
    }
    componentDidMount(){}
    render(){
        return (
            <div className="d-flex" id="wrapper">
              <Switch>
                <Route exac path={'/admin/dashboard'} component={Detail} key="1" />
                <Route path={'/admin/regions'} component={Region} key="2" />
                <Redirect from="/admin/" to="/admin/dashboard" />

              </Switch>
            </div>
          );
    } 
}

export default Admin;