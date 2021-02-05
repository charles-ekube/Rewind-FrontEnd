
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Landingpagenav} from "./widgets";

import './App.css';
import { Landingpage, SignUp, SignIn, Movieplayer } from "./pages";

import { Signup } from "./pages";
import { Dashboard } from "./pages";
import { Footer } from "./components";

function App() {

  return (
    <>
    
    {/* <Landingpagenav/> */}
    
    {/* <SignUp/> */}
    <Router>
        
        <Route exact path="/" render={props => (
          <React.Fragment>
                <Landingpage/>
          </React.Fragment>
        )}/>
        <Route path="/Movieplayer" component={Movieplayer}/>
        <Route path="/SignIn" component={SignIn}/>
           <Route path="/sign-up" component={Signup} />
          <Route path="/dash" component={Dashboard} />
     </Router> 
<Footer/>
  </>
  );
}

export default App;
