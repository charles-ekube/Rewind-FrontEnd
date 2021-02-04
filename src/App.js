import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//PAGES
import { Signup, Sign_up } from "./pages";
import { Login } from "./pages";
import { Dashboard } from "./pages";
import { Movies } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signup" component={Sign_up} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/dash" component={Dashboard} />
          <Route path="/movies" component={Movies} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
