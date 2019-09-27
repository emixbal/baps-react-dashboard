import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from "../routes";

class AdminSidebar extends Component {
    // create links function 
    createLinks = routes => {
        return routes.map((prop, key) => {
            return (
                <div key={key}>
                    <Link
                        className="list-group-item list-group-item-action bg-light"
                        to={prop.layout + prop.path}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        {prop.name}
                    </Link>
                </div>
            );
        });
    };

    render(){
        return(
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Start Bootstrap </div>
                <div className="list-group list-group-flush">
                    {this.createLinks(routes)}
                    {/* <Link to="" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="" className="list-group-item list-group-item-action bg-light">Shortcuts</Link>
                    <Link to="" className="list-group-item list-group-item-action bg-light">Overview</Link>
                    <Link to="" className="list-group-item list-group-item-action bg-light">Events</Link>
                    <Link to="" className="list-group-item list-group-item-action bg-light">Profile</Link>
                    <Link to="" className="list-group-item list-group-item-action bg-light">Status</Link> */}
                </div>
            </div>
        )
    }
}

export default AdminSidebar;