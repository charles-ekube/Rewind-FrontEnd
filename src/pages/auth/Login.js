import React, {useState} from 'react';
import { Google, Facebook, Or, Twitter, Logo } from "../../assets";
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';
import {ProtectedRoutes} from '../../pages' 

const Login = () => {
  // const { register, handleSubmit } = useForm();

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = { email, password };
    // send the username and password to the server
    const response = await axios.post(
      "https://rewind-api.herokuapp.com/users/login",
      user
    );
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    localStorage.setItem('user', response.data)
    console.log(response.data)
    
    
    // let userInfo = response.data
  };


  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  const handleLogout = () => {
    setUser({});
    setEmail("");
    setPassword("");
    localStorage.clear();

  };
  const history =useHistory();
  if (user) {
    console.log(user);
    swal({
      title: "Success!",
      text: "Redirecting......",
      type: "success",
      timer: 2000,
      showConfirmButton: false
    });
    // return <LandingPage user={user.props} handleLogout={handleLogout}/> ;
   history.push("/Userlandingpage");
  }

  
  return (
    <>
      <main className="login-info">
        <section className="d-flex justify-content-center">
          <form className="mt-4 px-5 py-4" onSubmit={handleLogin}>
            <img className="d-flex mx-auto" src={Logo} alt="" />
            <h1 className="login-header px-3">Sign In</h1>
            <p className="px-3 ">Welcome back, we missed you!</p>
            <label className="login-label mt-3">Email address</label>
            <input
              className="mb-3 login-input"
              name="email"
              // ref={register}
              type="email"
              value={email} 
              placeholder="Enter your email address"
              onChange={({ target }) => setEmail(target.value)}
            />

            <label className="login-label ml-4">Password</label>
            <input
              className="mb-4 login-input"
              name="password"
              // ref={register}
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={({ target }) => setPassword(target.value)}
            />
             {!isLoading ? <button
              className="d-block login-button "
              type="submit"
              value="Submit"
            >
              Sign In
            </button> :
             <button
             className="d-block login-button "
             type="submit"
             value="Submit"
           >
             Loading.....
           </button>
              }
            
            <p className="or-tag">
              <img src={Or} alt="" />
            </p>
            <div className="login-icons text-center ">
              <a href="./">
                <img src={Facebook} alt="" />
              </a>
              <a href="./">
                <img src={Google} alt="" />
              </a>
              <a href="./">
                <img src={Twitter} alt="" />
              </a>
            </div>
            <p className="text-footer mt-3 ">
              Don’t have an account?
              <Link to="/SignUp" className="click" href="click">
                Click here
              </Link>
            </p>
          </form>
        </section>
      </main>
      {/* <App user={user}/> */}
      {/* <ProtectedRoutes user={user}/> */}
    </>
  );
};

export { Login };
