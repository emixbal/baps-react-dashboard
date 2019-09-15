import React from 'react';

function LoginScreen({ match }){
    return (
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
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <a href="#" className="btn btn-primary">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginScreen;