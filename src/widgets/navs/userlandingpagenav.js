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


  const [showMenu, setShowMenu] = useState(false);
  let menu
  let menuMask

  if (showMenu) {
    menu = <aside
      className="mobile-nav-menu"
      data-aos="fade-right"
      data-aos-offset="500"
      data-aos-easing="ease-in-sine"
    >
      <a href="/">
        <img src={RewindLogo} alt="RewindLogo" />
      </a>
      <ul className="mobile-nav-list">
        <li className="mobile-nav-item">
          <FaSearch onClick={SearchBar} />
          <SearchModal
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
          />
        </li>
        <li className="mobile-nav-item">
          <Link>
            Home
                </Link>
        </li>
        <li className="mobile-nav-item">
          Categories
              </li>
        <li className="mobile-nav-item">
          Support
        </li>
        <li className="mobile-nav-item ">
          <Link to="/Landingpage" id="signup-btn">
            Logout  
          </Link>
        </li>
      </ul>

    </aside>

    menuMask = <aside
      className="mobile-menu-mask"
      onClick={() => setShowMenu(false)}></aside>
  }
  return (
    <>

      <header>
        <nav>
          <Link to="/Userlandingpage">
            <img src={RewindLogo} alt="RewindLogo" />
          </Link>
          <section className="nav-list-container">
            <ul className="nav-list">
              <li className="nav-item">
                <FaSearch onClick={SearchBar} className="search-open-btn" />
                <SearchModal
                  showSearchBar={showSearchBar}
                  setShowSearchBar={setShowSearchBar}
                />
              </li>
              <li className="nav-item">
                <Link>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                Categories
              </li>
              <li className="nav-item">
                Support
              </li>
              <li className="mobile-nav-item ">
          <Link to="/Landingpage" id="signup-btn">
            Logout  
          </Link>
        </li>
            </ul>

            <span className="mobile-nav-btn">
              <FiMenu onClick={() => setShowMenu(!showMenu)} />
            </span>
          </section>

        </nav>
      </header>
      {menu}
      {menuMask}
    </>
  )
}

export { Userlandingpagenav };

