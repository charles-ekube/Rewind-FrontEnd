import React from "react";
import "./cards.css";
import { AiOutlineClose } from "react-icons/ai";
import { SnapBg, Ssnap, Fsnap, Tsnap } from "../../assets";
import { useHistory } from 'react-router-dom'

const MovieModal = ({movieModal, setMovieModal, movies, selectedMovie}) => {
    
    const history = useHistory();

    return (
        <>
             {movieModal ? (
            <section className="movie-modal-background">
                <div className="movie-modal-box" movieModal={movieModal}>
                    
                        <img src={selectedMovie.coverpics_url} alt='poster'/>
                        
                        <section className="movie-description">
                            <aside className="movies-description-content">
                                <h4>{selectedMovie.title}</h4>
                                <ul>
                                    <li>{selectedMovie.release_date}</li>
                                    <li id='pg'>PG-13</li>
                                    <li>1hr 3min</li>
                                </ul>
                                <article>
                                    {selectedMovie.description}
                                {/* Seventeen-year-old Rose hails from an aristocratic 
                                family and is set to be married. 
                                When she boards the Titanic, she meets Jack Dawson,
                                 an artist, and falls in love with him. */}
                                </article>
                            </aside>
                            <aside className="movies-description-details">
                                <button onClick={(props) => history.push({
                                pathname: `/movie/play/${selectedMovie.title.split(" ").join("_")}`,
                                state: { movie : `${selectedMovie.movie_url}`}
                                        //   ${movie.cast}, ${movie.description}` }
                            })
                            } >
                                    <span></span>
                                    Play
                                </button>
                                <div className="cast">
                                    <span>Cast:</span>
                                    <ul>
                                        {/* {selectedMovie.cast} */}
                                        <li>Macaulay Culkin,</li>
                                        <li>Joe Pesci,</li>
                                        <li>Daniel Isky,</li>
                                        <li>John King,</li>
                                        <li>Roberts Us</li>
                                    </ul>
                                </div>
                                {/* <div className="genre">
                                    <span>Genre: </span>
                                    {/* <ul>
                                        <li> Comedy,</li>
                                        <li>Adventure,</li>
                                        <li>Childrens film</li>
                                    </ul> */}
                                {/* </div> */}
                                 
                            </aside>
                        </section>
                    <button aria-label='Close modal' onClick={() => setMovieModal(prev => !prev)} id='cd-btn'><AiOutlineClose/></button>
                </div>
            </section>
        ) : null}
        </>
    )
}

export {MovieModal}
