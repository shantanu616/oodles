import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import MAIN from './Container'

function App() {
  return (
      <Router>
        <Route exact path="/" component={MAIN.home} />
        <Route exact path="/question1" component={MAIN.question1} />
        <Route exact path="/question2" component={MAIN.question2} />
        <Route  path="/question3" component={MAIN.question3} />
        <Route exact path="/query_params" component={MAIN.RouteComponentB} />
      </Router>
  );
}

export default App;
 // <Link to={{ pathname:"/about", search: "?login=true" }}>About</Link>