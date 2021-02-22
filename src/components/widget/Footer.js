import React from "react";
import "./Footer.css";
import { Logo } from "../../assets";
import { GrTwitter } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="">
        <main className=" try">
          <h1>SING</h1>
        </main>
        <footer className=" footer-container ">
          <img src={Logo} alt="logo" />
          <p>© 2021 Rewind. All Rights Reserved.</p>
          <div className="media-icons">
            <GrTwitter />
            <SiYoutube />
            <FaLinkedinIn />
          </div>
        </footer>
      </div>
    </>
  );
};

export { Footer };
