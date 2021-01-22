import React from 'react'
import {useForm} from "react-hook-form";
import './Login.css'

const Login = () => {
    const { register, handleSubmit, errors} = useForm();
        const onSubmit = (e, data) => {
            
            console.log(data);
        };

  return (
        <>
        <section className="signin-container">
            <section className="form-container">

                        <h4 id="header-title"> Sign in</h4>
                        <p>Welcome, we missed you!</p>
                    

                    <form className='Login' onSubmit={handleSubmit(onSubmit)}>               
                       
                        <label for="username">Your username </label>
                        <input type="text" 
                            id="username" 
                            name="username" 
                            className='form-inputs' 
                            placeholder="Enter your username" 
                            ref={register({required: true})}/>
                            {errors.username && errors.username.type === "required" && ( <p>This is required</p>)}
                    
                        <label for="password">Password </label>
                        <input type="password" 
                            id="password" 
                            name="password" 
                            className='form-inputs' 
                            ref={register({required: true})} 
                            placeholder="Enter your password"/>
                            {errors.password && errors.password.type === "required" && ( <p>This is required</p>)}
                   
                    <div className="flex-items">
                        
                        <span className="rememberDiv">
                            <span id="radioThick">
                                <input type="radio" 
                                id="Remember" 
                                className="radio"
                                name="Remember" />
                            </span>
                            <span id="remeberMe">
                                <label for="name">Remember me</label>
                            </span>
                        </span>
                    
                        <span className="fpassword"><label for="fpassword">Forgot password?</label></span>

                    </div>
                    <div>
                        <button className='button' 
                            type="Submit" 
                            id="button"
                            name="SignIn"> Sign In
                        </button>
                    </div>
                     
                </form>
                <div className="third-party-container">
                   <div><p className="third-party-text">or continue with</p></div> 
                    <div className="thirdpartybuttons">
                       <button className='thirdpartybutton' 
                            type="Submit" 
                            id="facebook"
                            name="facebook">  Sign in with Facebook
                    </button> 
                    
                    <button className='thirdpartybutton' id="google" >Google</button> 
                 
                    </div>
                    </div>
            </section>

            <section className="image-container">
                <section className="video-container">
                        <div className="overlay-bg">
                            <span className="overlay-text1"> Close </span>  
                        </div> 
                        <div>
                            <span className="overlay-text"> Don't have an account? </span>
                            <button className="overlay-button">Click here</button>
                        </div>                  
                </section>
               

            </section>
        </section>
  

        </>
  );
};

export default Login;
