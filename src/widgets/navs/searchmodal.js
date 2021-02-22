import React from "react";
import {FaSearch} from "react-icons/fa";
import "../widgets.css";

const SearchModal = ({ showSearchBar, setShowSearchBar}) => {

    return (
        <>
        {showSearchBar ? 
        <section className="search-background">
            <form className="search-input">
                <input 
                type="text"
                placeholder="Search Movie"
                name="movie-search"
                value=""
                />
            </form>
            <section className="search-display">
                <span><FaSearch/></span>
            </section>
        </section>
         : null}
   </>
    )
}

export {SearchModal}