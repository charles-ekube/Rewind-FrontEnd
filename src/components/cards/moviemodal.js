import React from "react";
import "./cards.css";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import { Playicon } from '../../assets'

const MovieModal = ({movieModal, setMovieModal, movies, selectedMovie}) => {
    
    const history = useHistory();

    return (
        <>
             {movieModal ? (
            <section className="movie-modal-background">
                <div className="movie-modal-box" movieModal={movieModal}>
                    
                        <img src={selectedMovie.coverpics_url} alt='poster'/>
                        <span className="play-btn-overlay">
                            <img 
                            src={Playicon} 
                            alt="playbtn"
                            onClick={(props) => history.push({
                            pathname: `/movie/play/${selectedMovie.title.split(" ").join("_")}`,
                            state: { movie : `${selectedMovie.movie_url}`,
                                     description : `${selectedMovie.description}`,
                                     thumbnail : `${selectedMovie.coverpics_url}`,
                                     span : `${selectedMovie.length}`,
                                    category : `${selectedMovie.cast}`
                            } })}
                            />
                        </span>
                        <section className="movie-description">
                            <div className="movies-description-content">
                            <ul>
                                <li>
                                    <h4>
                                    {selectedMovie.title}
                                    </h4>
                                </li>
                                <li className="date-time">
                                    <ul>
                                        <li>
                                            {selectedMovie.release_date}
                                        </li>
                                        <li>
                                            PG - 13
                                        </li>
                                        <li>
                                            1hr 43mins
                                        </li>
                                    </ul>
                                </li>
                                <li className="like-add">
                                    <ul>
                                        <li>f</li>
                                        <li>f</li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                            <div className="genre">
                                <ul>
                                    <li>
                                        Genre:
                                    </li>
                                </ul>
                            </div>
                            <article>
                                    {selectedMovie.description}        
                            </article>
                                                  
                        </section>
                    <button aria-label='Close modal' onClick={() => setMovieModal(prev => !prev)} id='cd-btn'><AiOutlineClose/></button>
                </div>
            </section>
        ) : null}
        </>
    )
}

export {MovieModal}
