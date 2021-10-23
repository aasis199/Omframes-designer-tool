import React,{useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Env from './components/Env/Env';
import Tabletop from './components/Tabletop/Tabletop';
import Index from './components/Index/Index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
    <Navbar />
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/tabletop-design" component={Tabletop}/>
        <Route path="/design" component={Env}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
