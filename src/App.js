import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MovieModal } from "./components";
import { Landingpage, SignUp, Login, Forgotpassword, Resetpassword, Dashboard, Movieplayer, ProtectedRoutes, Userlandingpage } from "./pages";

function App({user}) {

  return (
    <>
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
        <Route path="/Forgotpassword" component={Forgotpassword} />
        <Route path="/Resetpassword" component={Resetpassword} />
        <Route path="/Dashboard" component={Dashboard} />
       
        
        {/* <ProtectedRoutes path='/Userlandingpage' component={Userlandingpage} user={user}/> */}
      </Router>
    </>
  );
}

export default App;
