import React, { useRef, useState } from "react";
import {FaSearch} from "react-icons/fa";
import {RewindLogo} from "../../assets"
import "../widgets.css";

const SearchModal = ({ showSearchBar, setShowSearchBar }) => {

    const searchRef = useRef();
    const closeSearchModal = e => {
        if(searchRef.current === e.target) {
            setShowSearchBar(false);
        }
    }

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const searchMovies = async(e) => {
        e.preventDefault();
        // console.log("ec det weor,l")
        // const query = "Karashika";
        const url = `https://rewind-test.herokuapp.com/movies/search/movie?title=${query}`;
        
        try {
            
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setMovies(data.result);
        }catch(err) {
            console.error(err); 
        }
     

    }
    
    return (
        <>
        {showSearchBar ? 
        <section className="search-background" ref={searchRef} onClick={closeSearchModal}>
            <nav className="search-nav">
                <img src={RewindLogo} alt="logo"/>
            </nav>
            <form className="search-input" onSubmit={searchMovies}>
                <input 
                type="text"
                placeholder="Enter Movie Name"
                name="query"
                value={query}
                onChange={ (e) => setQuery(e.target.value)}
                />
            </form>
            <section className="search-display">
                <span><FaSearch/></span>
                <div className="search-display-overlay">
                    {movies.map(movie => (
                        <ul className="search-list">
                            <li className="search-list-movie-poster">
                                <img src={movie.coverpics_url} alt="poster" />
                            </li>
                            <li className="search-list-movie-details">
                                <h5>{movie.title}</h5>
                                <div className="search-list-movie-details-footer">
                                    <span>{movie.release_date}</span>
                                    <span>B&W</span>
                                    <span>2hrs 9min</span>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </section>
        </section>
         : null}
   </>
    )
}

export {SearchModal}