import React from "react";
import { useForm } from "react-hook-form";
import { Logo } from "../../assets";
import "./Resetpassword.css";

const Resetpassword = () => {
  const { register } = useForm();
  const handleSubmit = (data) => 
  
  console.log(data);
  return (
    <>
      <main className="Resetpassword-info">
        <section className="d-flex justify-content-center">
          <form className="mt-5 px-5 py-4" onSubmit={handleSubmit} >
            <img className="d-flex mx-auto" src={Logo} alt="" /> 
            <h1 className="Resetpassword-header ml-4">Reset password</h1>
            <p className="ml-4 ">Don't use a variation of an old password or any personal information.</p>
            
            <label className="Resetpassword-label ml-4">New Password</label>
            <input
              className="mb-3 Resetpassword-input"
              name="email"
              ref={register}
              type="email"
              required
              // onChange={handleChange}
              placeholder="New password"
            />

            <label className="Resetpassword-label ml-4">Confirm Password</label>
            <input
              className="mb-4 Resetpassword-input"
              name="password"
              ref={register}
              required
              type="text"
              // onChange={handleChange}
              placeholder="Confirm password"
            /> 

            <button
              className="d-block Resetpassword-button "
              type="submit"
              value="Submit"
            >
              <p className="mr-4 mt-2 mb-2">Send link</p>
            </button>
            
          </form>
        </section>
      </main>
    </>
  );
};

export default Resetpassword;