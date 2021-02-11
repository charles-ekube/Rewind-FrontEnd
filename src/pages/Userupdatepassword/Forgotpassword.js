import React from "react";
import { useForm } from "react-hook-form";
import { Logo } from "../../assets";
import "./Forgotpassword.css";

const Forgotpassword = () => {
  const { register } = useForm();
  const handleSubmit = (data) => 
  
  console.log(data);
  return (
    <>
      <main className="Forgotpassword-info">
        <section className="d-flex justify-content-center">
          <form className="mt-5 px-5 py-4" onSubmit={handleSubmit} >
            <img className="d-flex mx-auto" src={Logo} alt="" /> 
            <h1 className="Forgotpassword-header ml-4">Forgot password</h1>
            <p className="ml-4 ">Enter the email address you signed up with to recieve a secure link</p>
            <label class="control-label col-sm-2">Email address</label>
            <input
              className="mb-3 Forgotpassword-input"
              name="email"
              ref={register}
              type="email"
              required
              // onChange={handleChange}
              placeholder="Enter your email address"
            />

            <button
              className="d-block Forgotpassword-button "
              type="submit"
              value="Submit"
            >
              <p className="mr-4 mt-2 mb-2">Send link</p>
            </button>
            <p className="or-tag">
              {/* <img src={Or} alt="" /> */}
            </p>
            {/* <div className="Forgotpassword-icons text-center ">
              <a href="./">
                <img src={Facebook} alt="" />
              </a>
              <a href="./">
                <img src={Google} alt="" />
              </a>
              <a href="./">
                <img src={Twitter} alt="" />
              </a>
            </div> */}
            {/* <p className="text-footer mt-3 text-center">
              Don’t have an account?
              <a className="click" href="click">
                Click here
              </a>
            </p> */}
          </form>
        </section>
      </main>
    </>
  );
};

export default Forgotpassword;