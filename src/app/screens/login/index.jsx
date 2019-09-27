import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { login } from '../../redux/actions/login';

class LoginScreen extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email:'',
    //         password:''
    //     }
    // }
    state = {
        email:'',
        password:''
    }

    handleLoginButton() {
        alert(JSON.stringify(this.state))
        // this.props.dispatch(login(user));
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render(){        
        return(
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 pt-5">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-text font-weight-bold">Login</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <button className="btn btn-primary" onClick={this.handleLoginButton}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToPros = state => ({
    region: state.region
})

export default connect(mapStateToPros)(LoginScreen);