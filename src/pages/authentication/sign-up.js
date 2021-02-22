import React, {useRef} from 'react';
// import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import {useForm} from "react-hook-form";
import "./auth.css";
import RewindApi from "../../api/RewindApi"
import {SignUpSuccess} from "../../assets";
import swal from 'sweetalert';


const SignUp = () => {

        const { register, handleSubmit, errors, watch } = useForm();
        const password = useRef({});
        password.current = watch("password", "");
        const emailReg = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i';
        // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


        const onSubmit = (data) => {
            console.log(data);

              RewindApi.post("users/sign-up",data).then((d) =>{
            console.log(d);
            if(d.status === 201) {

                      swal({
          title: "Done!",
          text: "Successfully Registered",
          icon: "success",
          timer: 4000,
          button: false
        })
            }
             if(d.status === 401) {

                swal({
                    title: "Warning!",
                    text: "User Already Exits",
                    icon: "warning",
                    timer: 4000,
                    button: false
                  })

            }
             if(d.status === 404) {
                swal({
                    title: "Error!",
                    text: "Contact Customer Services For More Details",
                    icon: "error",
                    timer: 4000,
                    button: false
                  })
            }
     }).catch(err => alert(err));
    // console.log(data);
        }
        const validatePassword = async (value) => {
                // await sleep(500)
                // let errmsg = '';
                if (value.length < 6 ) {
                    return false
                }
                else {
                    return true
                }
        }
        const validateConfirmPassword = async (value) => {
            if ( value === password.current ) {
                    return true
            }
            else {
                return false
            }
        }
       
          const validateEmail = async (value) => {
              if (value.pattern === emailReg) {
                  return false
              }
              else {
                  return true
              }
          }
    // const handleSubm = (e) => {
    //     e.preventDefault();
    //     let username = e.target.username.value;
    //      let email = e.target.email.value;
    //      let password = e.target.password.value;
    //      let confirmPassword = e.target.confirmPassword.value;
    //      let data = {
    //          username,
    //          email,
    //          password,
    //          confirmPassword
    //      }

    
    // }
    // if (handleSubmit) {
         
    // }

    return (
        <>
            <section className="sign-up-container">
                <form className="sign-up-form grid-layout-100" onSubmit={handleSubmit(onSubmit)}>
                    <header className="sign-up-form-header">
                        <h2>Sign Up</h2>
                        <span>Sign up to get an account</span>
                    </header>
                    <div className="grid-layout-100">
                        <label className="sign-up-form-label">Username</label>
                        <input 
                            type="text" 
                            placeholder="Enter your username" 
                            className="sign-up-form-input" 
                            name="username"
                            ref={register({ required : true})}
                        />
                        {errors.username && <small>This field is required</small>}
                    </div>
                    <div className=" grid-layout-100">
                        <label className="sign-up-form-label">Email address</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="sign-up-form-input" 
                            name="email"
                            ref={register({ required : true, validate : validateEmail})}
                        />
                        {errors.email && <small>This field is required</small>}
                        {errors.email &&  errors.email.type === "validate" && (
                            <small className="error">Enter valid email</small>
                        )} 
                    </div>
                    <div className=" grid-layout-100">  
                        <label className="sign-up-form-label">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            className="sign-up-form-input" 
                            name="password"
                            ref={register({ required : true, validate : validatePassword})}                            
                        />
                        {errors.password && errors.password.type === "required" && (
                            <small className="error">This field is required</small>
                         )}
                        {errors.password &&  errors.password.type === "validate" && (
                            <small className="error">Password must have at least 6 characters</small>
                        )} 
                    </div>
                    <div className=" grid-layout-100">
                        <label className="sign-up-form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            placeholder="Confirm password" 
                            className="sign-up-form-input"
                            name="confirmPassword"
                            ref={register({ required : true, validate : validateConfirmPassword})}
                        />
                        {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                            <small className="error">This field is required</small>
                         )}
                        {errors.confirmPassword &&  errors.confirmPassword.type === "validate" && (
                            <small className="error">Password does not match</small>
                        )}
                    </div>      
                    
                    <button type="submit" className="sign-up-btn">
                        Sign Up
                    </button>
                
                </form>
                
            <aside className="sign-up-aside">
                {/* <img */}
            </aside>
            </section>
            <section className="sign-up-success">
                <div>
                    <img src={SignUpSuccess} alt="Success-Image"/>
                    <p>You have successfully created an account</p>
                </div>
                <button className="sign-up-success-btn">
                    Continue
                </button>
            </section>
        </>
    )
}

export {SignUp}
