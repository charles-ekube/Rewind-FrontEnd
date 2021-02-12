import React from "react";
import {RewindLogo} from "../../assets";
import { GrTwitter } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return (
        <>
     <footer className=" ft-container-con ">
          <img src={RewindLogo} alt="logo" />
          <span className="copy">© 2021 Rewind. All Rights Reserved.</span>
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
