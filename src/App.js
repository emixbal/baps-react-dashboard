import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './app/redux/store'

import Admin from "./app/layouts/Admin"
import Auth from "./app/layouts/Auth"

function Home(){
    return(
      <div>
        Home
      </div>
    )
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" render={props => <Admin {...props}/>} /> 
          <Route path='/auth' render={props => <Auth {...props}/>} />
          <Redirect to="/admin/dashboard" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
