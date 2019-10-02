import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class AlertError extends Component {
    
    render(){
        return(
            <div>
                <Alert color="danger">
                    <div>{this.props.message}</div>
                    <div>status: {this.props.statusCode}</div>
                </Alert>
            </div>
        )
    }
}

export default AlertError;