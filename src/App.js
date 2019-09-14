import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path='/auth' component={Auth} />
    </Router>
  );
}

export default App;

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <Link to={`${match.url}/exampleTopicId`}>
//       Example topic
//     </Link>
//     <Route path={`${match.url}/exampleTopicId`} component={Topic}/>
//   </div>
// )
