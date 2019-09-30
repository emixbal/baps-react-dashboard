import React from 'react';

import LoginScreen from "../screens/login";

class Auth extends React.Component {
    state = {
        isRedirect : false
    }
    componentDidMount(){
      if(localStorage.getItem('token')!=null){
        this.setState({isRedirect:true})
      }
    }

    render() {
        return (
            <LoginScreen />
        )
    } 
}
        
export default Auth;