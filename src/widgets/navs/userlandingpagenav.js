import React, { useState } from 'react';
import "../widgets.css";
import AOS from "aos";
import 'aos/dist/aos.css'
import { RewindLogo } from "../../assets";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { SearchModal } from "../../widgets";
import { Link } from "react-router-dom";
 


const Userlandingpagenav = () => {
  AOS.init();


  //Search Bar Didplay Function
  const [showSearchBar, setShowSearchBar] = useState(false);

  const SearchBar = () => {
    setShowSearchBar(prev => !prev)
  }


  return (
    <>

      <header>
        <nav>
          <a href="/">
            <img src={RewindLogo} alt="RewindLogo" />
          </a>
          <section className="nav-list-container">
            <ul className="nav-list">
              <li className="nav-item">
                <FaSearch onClick={SearchBar} />
                <SearchModal
                  showSearchBar={showSearchBar}
                  setShowSearchBar={setShowSearchBar}
                />
              </li>
              <li className="nav-item">
                {/* <Link>
                        Home
                        </Link> */}
                        Home
                      </li>
              <li className="nav-item">
                All Movies
              </li>
              <li className="nav-item">
                Categories
              </li>
              <li className="nav-item">
                  <Link to="/Login" className="signin-btn"> 
                    Username
                  </Link>
              </li>
              <li className="nav-item ">
                 <Link to="/" id="signup-btn">
                    Logout
                 </Link>
              </li>
            </ul>

            <span className="mobile-nav-btn">
              <FiMenu />
            </span>
          </section>

        </nav>
      </header>
    </>
  )
}

export { Userlandingpagenav };

