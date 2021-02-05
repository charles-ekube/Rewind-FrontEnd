import React from "react";
import './Signup.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Signup = () => {
    const { handleSubmit, handleChange, errors, register } = useForm()

    const onSubmit = (values) => {
        // e.preventDefault();
        // console.log(values);

        const post = async () => {
            await axios.post('https://rewind-api.herokuapp.com/users/sign-up', {
            

            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
        }
        
           
    }

    return (
        <>

            <section className="grid-box">
                <section className="signup-info">
                    <h2>Sign Up</h2>
                    <p>Sign up to get an account</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Username</label>
                        <input  name="username" ref={register({ required: true })}
                                type="text"
                                onChange={handleChange}
                                placeholder="Enter your username" />
                                {/* value={values.username} */}
                        {errors.username && <p>Username already taken</p>}

                        <label>Email address</label>
                        <input name="email" ref={register({ required: true })}
                                type="text"
                                //    value={values.email}
                                onChange={handleChange}
                                placeholder="Enter your email" />
                            {errors.email && <p>Enter valid Email</p>}

                        <label>Password</label>
                        <input name="password" ref={register({ required: true })}
                            type="text"
                            // value={values.password}
                            onChange={handleChange}
                            placeholder="Enter your password" />
                        {errors.password && <p>Use 6 or more characters</p>}

                        <label>Confirm password</label>
                        <input name="confirmPassword" ref={register({ required: true })}
                            type="text"
                            // value={values.confirmpassword}
                            onChange={handleChange}
                            placeholder="Confirm your password" />
                        {errors.confirmPassword && <p>Passwords don't match</p>}

                        <button className="button1" type="submit" value="Submit">Sign Up</button>

                        {/* const handleSubmit = (e) => {
                            e.preventDefault();
                            } */}
                    </form>
                </section>

                <section className="signup-image">
                    <div className="overlay-container">
                        <div className="overlay-bg">

                        </div>
                    </div>
                    {/* <img src={Frame} alt="signup-frame"/> */}

                    <div>
                        <span className="acct-set-up">Have an account?</span>
                        <button className="button2">Click here</button>
                        <button>close</button>
                    </div>

                </section>
            </section>
            <section className="signup-container"></section>

        </>
    )
}

export { Signup }
