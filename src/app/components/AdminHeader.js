import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminHeader extends Component{
    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">Link</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="">Action</Link>
                    <Link className="dropdown-item" to="">Another action</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="">Something else here</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default AdminHeader;