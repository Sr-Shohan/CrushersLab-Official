import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Career from './components/Career/Career';
import MainComponent from './components/MainComponent/MainComponent';
import Navbar from './components/navbar/navbar';

function App() {
  return (

    <MainComponent />
    // <Router>
    //   <Navbar />
    //   <Route exact path='/' component={MainComponent}></Route>
    //   <Route exact path='/career' component={Career}></Route>
    // </Router>

  );
}

export default App;
