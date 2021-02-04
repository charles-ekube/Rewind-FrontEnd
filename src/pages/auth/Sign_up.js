import React from "react";
import { useForm } from "react-hook-form";
import { Google, Facebook, Or, Twitter, Logo } from "../../assets";
import "./Sign_up.css";

const Sign_up = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <main className="sign-up-info">
        <section className="d-flex justify-content-center">
          <form className="mt-5 px-5 py-4 mb-5" onSubmit={handleSubmit}>
            <img className="d-flex mx-auto" src={Logo} alt="" />
            <h1 className="login-header ml-4">Sign Up</h1>
            <p className="ml-4 sign-up-text">Sign up to get an account</p>

            <label className="login-label mt-3">Email address</label>
            <input
              className="mb-3 login-input"
              name="email"
              required
              type="email"
              // onChange={handleChange}
              placeholder="Enter your email address"
            />

            <label className="login-label">Password</label>
            <input
              className="mb-4 login-input"
              name="password"
              required
              type="text"
              // onChange={handleChange}
              placeholder="Enter your password"
            />

            <label className="login-label">Confirm Password</label>
            <input
              className="mb-4 login-input"
              name="confirm password"
              // ref={register}/
              required
              type="text"
              // onChange={handleChange}
              placeholder="Confirm password"
            />

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
              <a className="click" href="click">
                Click here
              </a>
            </p>
          </form>
        </section>
      </main>
    </>
  );
};

export { Sign_up };
