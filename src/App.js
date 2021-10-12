import React from 'react';
import { BrowserRouter as Router, Route, HashRouter, useHistory, Switch } from 'react-router-dom'
import Notfound from './components/404/Notfound';
import AboutUs from './components/About us/AboutUs';
import Career from './components/Career/Career';
import MainComponent from './components/MainComponent/MainComponent';
import Navbar from './components/navbar/navbar';

function App() {
  let info = useHistory();
  console.log(info);
  return (
    <>
      <Router Router >


        <Switch>
          <Route exact path='/'> <MainComponent /></Route>
          <Route exact path='/career'> <Career /> </Route>
          <Route exact path='/aboutus' > <AboutUs /></Route>
          <Route component={Notfound}></Route>

        </Switch>
      </Router>

    </>
  );
}

export default App;
