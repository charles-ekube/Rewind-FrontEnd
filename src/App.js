import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { Landingpage, Userlandingpage, Movieplayer, SignUp, Login } from "./pages";
import { Footer } from "./widgets/footer/footer";



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
        <Route path="/Userlandingpage" component={Userlandingpage}/>
        <Route path="/Login" component={Login}/>
        <Route path="/SignUp" component={SignUp}/>
         {/* <Route path="/ProductDesignPage" component={ProductDesignPage}/>
        <Route path="/ApplyPage" component={ApplyPage}/>
        <Route path="/JournalPage" component={JournalPage}/>
        <Route path="/FaqPage" component={FaqPage}/>
        <Footer/> */}
     </Router> 
     
  </>
  );
}

export default App;
