import React, {useState} from 'react';
import { Logo } from "../../assets";
import "./Login.css";
import axios from 'axios';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // const user = { email, password };
        // send the username and password to the server
        // const response = await axios.post(
        //   "https://rewind-api.herokuapp.com/users/login",
        //   user
        // );
        // set the state of the user
        // setUser(response.data)
        // store the user in localStorage
        // localStorage.setItem('user', response.data)
        // console.log(response.data)
        
        
        // let userInfo = response.data
      };
    
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
            
          </form>
        </section>
      </main>   
        </>
    )
}

export {ForgotPassword}
