import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" render={props => <Admin {...props}/>} /> 
        <Route path='/auth' render={props => <Auth {...props}/>} /> 
      </Switch>
    </Router>
  );
}

export default App;
