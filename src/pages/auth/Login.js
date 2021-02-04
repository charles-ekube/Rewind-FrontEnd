import React from "react";
import { useForm } from "react-hook-form";
import { Google, Facebook, Or, Twitter, Logo } from "../../assets";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <main className="login-info">
        <section className="d-flex justify-content-center">
          <form className="mt-5 px-5 py-4" onSubmit={handleSubmit}>
            <img className="d-flex mx-auto" src={Logo} alt="" />
            <h1 className="login-header ml-4">Sign In</h1>
            <p className="ml-4 ">Welcome back, we missed you!</p>
            <label className="login-label mt-3">Email address</label>
            <input
              className="mb-3 login-input"
              name="email"
              ref={register}
              type="email"
              required
              // onChange={handleChange}
              placeholder="Enter your email address"
            />

            <label className="login-label ml-4">Password</label>
            <input
              className="mb-4 login-input"
              name="password"
              ref={register}
              required
              type="text"
              // onChange={handleChange}
              placeholder="Enter your password"
            />

            <button
              className="d-block login-button "
              type="submit"
              value="Submit"
            >
              <p className="mr-4 mt-2 mb-2">Sign In</p>
            </button>
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
            <p className="text-footer mt-3 text-center">
              Don’t have an account?
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

export { Login };
