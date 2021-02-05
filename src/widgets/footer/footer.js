import React from "react";
import {RewindLogo} from "../../assets";
import { GrTwitter } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <footer className=" footer-container ">
          <img src={RewindLogo} alt="logo" />
          <p>© 2021 Rewind. All Rights Reserved.</p>
          <ul className="media-icons">
            <li>
                <GrTwitter />
            </li>
            <li>
                <SiYoutube />
            </li>
            <li>
                <FaLinkedinIn />
            </li>    
          </ul>
        </footer> 
        </>
    )
}

export {Footer}
