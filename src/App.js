
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Landingpagenav} from "./widgets";
import './App.css';
import { Landingpage, SignUp, SignIn, Test } from "./pages";
import './App.css';
import {Signup} from "./pages";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Landingpage, Movieplayer, Login, SignUp, Dashboard, Userlandingpage, Upload} from './pages';
import {MovieModal} from './components';


function App() {

  return (

    <>


    <Landingpage/>
    {/* <SignUp/> */}
    {/* <Router>
      <Router>

        
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Landingpage />
          </React.Fragment>
        )} />
        <Route path="/movie/play/:id" component={Movieplayer} />
        <Route path="/MovieModal/:id" component={MovieModal} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Userlandingpage" component={Userlandingpage} />
        <Route path="/Upload" component={Upload} />
      </Router>
    </>

  );
}

export default App;
