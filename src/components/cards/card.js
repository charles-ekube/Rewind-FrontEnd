import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import "./cards.css";
import { MovieModal } from "../../components";
import { Playicon } from "../../assets"
import AOS from "aos";
import 'aos/dist/aos.css'
import { CgSpinnerTwo } from 'react-icons/cg';

const Card = ({ movies, isLoading }, props) => {
    AOS.init();

    // useEffect(() => {
    //     console.log(movies)
    // }, [])

    const [movieModal, setMovieModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const toggleMovieModal = (e, movie) => {
        setMovieModal(prev => !prev);
        setSelectedMovie(movie);
        
    }

    // const history = useHistory();


    return  isLoading ? <h1 className="spinner animate__rotateIn"><CgSpinnerTwo/></h1> : <main
    >
        <section  className="card-grid">
        {movies.map(movie => (
            <section className="movie-container-holder"  key={movie._id}>
                <div className="movie-container"  data-aos="fade-up" data-aos-duration="1000">
                    <section className="movie-poster">
                        <img src={movie.coverpics_url} alt="poster" />
                        <span className="movie-poster-overlay" >
                            <button onClick={(e) => toggleMovieModal(e, movie)}>click me</button>
                            <img src={Playicon} alt='play'/>
                        </span>
                    </section>
                    <section className="movie-title">
                        <h4>{movie.title}</h4>
                    </section>
                    <section className="movie-container-footer">
                        <ul>
                            <li>{movie.release_date}</li>
                            <li>Coloured</li>
                            <li>2hr 9mins</li>
                        </ul>
                    </section>

                </div>
            </section>
        ))}
        <MovieModal movieModal={movieModal} selectedMovie={selectedMovie}  setMovieModal={setMovieModal} />
        </section>
        
    </main>
    
    
}

export { Card }
