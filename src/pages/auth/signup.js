import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Google, Facebook, Or, Twitter, Logo } from "../../assets";
import "./Sign_up.css";
import { Link } from "react-router-dom";
import axios from "axios"

const SignUp = () => {

  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const emailReg = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i';
  // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


  const onSubmit = (data) => {
    console.log(data);

    axios.post("https://rewind-api.herokuapp.com/users/sign-up", data).then((d) => {
      console.log(d);
      if (d.status === 201) {

        // swal({
        //   title: "Successfully Registered",
        //   text: "Redirecting........",
        //   type: "success"
        // })
        alert('done');
      }

    }).catch(err => alert(err));
    // console.log(data);
  }
  const validatePassword = async (value) => {
    // await sleep(500)
    // let errmsg = '';
    if (value.length < 6) {
      return false
    }
    else {
      return true
    }
  }
  const validateConfirmPassword = async (value) => {
    if (value === password.current) {
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

  return (
    <>
      <main className="sign-up-info">
        <section className="d-flex justify-content-center">
          <form className="mt-5 px-5 py-4 mb-5" onSubmit={handleSubmit(onSubmit)}>
            <img className="d-flex mx-auto" src={Logo} alt="" />
            <h1 className="login-header ml-4">Sign Up</h1>
            <p className="ml-4 sign-up-text">Sign up to get an account</p>

            <div>
              <label className="login-label mt-3">Email address</label>
              <input
                className="mb-3 login-input"
                name="email"
                type="email"
                placeholder="Enter your email address"
                ref={register({ required: true, validate: validateEmail })}
              />
              {errors.email && <small>This field is required</small>}
              {errors.email && errors.email.type === "validate" && (
                <small className="error">Enter valid email</small>
              )}
            </div>
            <div>

            <label className="login-label">Password</label>
            <input
              className="mb-4 login-input"
              name="password"
              type="text"
              ref={register({ required : true, validate : validatePassword})}  
              placeholder="Enter your password"
            />
             {errors.password && errors.password.type === "required" && (
                            <small className="error">This field is required</small>
                         )}
                        {errors.password &&  errors.password.type === "validate" && (
                            <small className="error">Password must have at least 6 characters</small>
                        )} 
            </div>
            <div>
            <label className="login-label">Confirm Password</label>
            <input
              className="mb-4 login-input"
              name="confirmPassword"
              type="text"
              ref={register({ required : true, validate : validateConfirmPassword})}
              placeholder="Confirm password"
            />
               {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                            <small className="error">This field is required</small>
                         )}
                        {errors.confirmPassword &&  errors.confirmPassword.type === "validate" && (
                            <small className="error">Password does not match</small>
                        )}
          </div>
            <button
              className="d-block login-button "
              type="submit"
              value="Submit"
            >
              <p className="mr-4 mt-2">Sign Up</p>
            </button>

            <p className="or-tag">
              <img src={Or} alt="" />
            </p>

            <div className="login-icons text-center mb-2 ">
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

            <p className="text-footer mt-3 text-center">
              Have an account?
              <Link to="/Login" className="click" href="click">
                Click here
              </Link>
            </p>
          </form>
        </section>
      </main>
    </>
  );
};

export { SignUp };