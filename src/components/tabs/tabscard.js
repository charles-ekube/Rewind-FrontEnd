import React, {useEffect, useState} from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import axios from "axios";
import {MovieModal} from "../../components";
import "../cards/cards.css"

const TabsCard = () => {


    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios(`https://rewind-test.herokuapp.com/movies/Adventure/movies`)
            console.log(result.data.message);

            setMovies(result.data.message);
            setIsLoading(false);
        }
        fetchMovies();
    }, [])


    const [movieModal, setMovieModal] = useState(false);
const [selectedMovie, setSelectedMovie] = useState(null);

const toggleMovieModal = (e, movie) => {
    setMovieModal(prev => !prev);
    setSelectedMovie(movie);
    
}

        return  isLoading ? <h1 className="spinner animate__rotateIn"><CgSpinnerTwo/></h1> : <main
        >
                  <section className="recent-upload-container">
                {movies.map(movie => (
                    <div key={movie._id} className="recent-upload-content-container">
                        <img src={movie.coverpics_url} alt="coverpic" className="movie-poster"/>
                        <span className="movie-poster-overlay">
                        <button onClick={(e) => toggleMovieModal(e, movie)}>click me</button>
                        </span>
                        <div className="recent-movie-details-container">
                            <h5>
                                {movie.title}
                            </h5>
                            <ul className="recent-movie-details">
                                <li>{movie.release_date}</li>
                                <li>{movie.category}</li>
                                <li>2hr 3mins</li>
                            </ul>
                        </div>
                    </div>
                ))}
            <MovieModal movieModal={movieModal} selectedMovie={selectedMovie}  setMovieModal={setMovieModal} />
         </section>

        </main>
        
}

export {TabsCard}



const TabsActionCard = () => {


    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios(`https://rewind-test.herokuapp.com/movies/Action/movies`)
            console.log(result.data.message);

            setMovies(result.data.message);
            setIsLoading(false);
        }
        fetchMovies();
    }, [])

    const [movieModal, setMovieModal] = useState(false);
const [selectedMovie, setSelectedMovie] = useState(null);

const toggleMovieModal = (e, movie) => {
    setMovieModal(prev => !prev);
    setSelectedMovie(movie);
    
}


        return  isLoading ? <h1 className="spinner animate__rotateIn"><CgSpinnerTwo/></h1> : <main
        >
             <section className="recent-upload-container">
                {movies.map(movie => (
                    <div key={movie._id} className="recent-upload-content-container">
                        <img src={movie.coverpics_url} alt="coverpic"/>
                        <span className="movie-poster-overlay">
                        <button onClick={(e) => toggleMovieModal(e, movie)}>open</button>
                        </span>
                        <div className="recent-movie-details-container">
                            <h5>
                                {movie.title}
                            </h5>
                            <ul className="recent-movie-details">
                                <li>{movie.release_date}</li>
                                <li>{movie.category}</li>
                                <li>2hr 3mins</li>
                            </ul>
                        </div>
                    </div>
                ))}
            <MovieModal movieModal={movieModal} selectedMovie={selectedMovie}  setMovieModal={setMovieModal} />
         </section>
            
        </main>
        
}

export {TabsActionCard}


