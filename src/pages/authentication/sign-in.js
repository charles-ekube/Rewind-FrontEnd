import React from 'react';
import swal from "sweetalert";
import {useForm} from "react-hook-form";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./auth.css";
import RewindApi from "../../api/RewindApi";


const SignIn = () => {

    const { register, handleSubmit, errors, watch } = useForm();

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


    return (
        <>
            <section className="sign-in-container">
                <form className="sign-in-form grid-layout-100"  onSubmit={handleSubmit(onSubmit)}>
                    <header className="sign-in-form-header">
                        <h2>Sign In</h2>
                        <span>Welcome, we missed you!</span>
                    </header>
                    <div className="grid-layout-100">
                        <label className="sign-in-form-label">Username</label>
                        <input type="text" placeholder="Enter your username" className="sign-in-form-input" required/>
                    </div>

                    <div className="grid-layout-100">
                        <label className="sign-up-form-label">Password</label>
                        <input type="password" placeholder="Enter your password" className="sign-in-form-input" required/>
                    </div>

                    <div className="terms-pass-reset">
                        <div>
                            <input label="Remember me" type="radio"/>
                        </div>
                        <a href="/">Forgot Password?</a>
                    </div>                    
                    <button type="submit" className="sign-in-btn">
                        Sign In
                    </button>
                
                </form>
                
            <aside className="sign-in-aside">
                {/* <img */}
            </aside>
            </section>
        </>
    )
}

export {SignIn}
