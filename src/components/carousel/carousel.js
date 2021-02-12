import React, {useState, useEffect} from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import axios from "axios"
import "./carousel.css";
import { MovieModal } from "../../components";
import AOS from "aos";
import 'aos/dist/aos.css';
import { FiPlay } from "react-icons/fi";


const CarouselPage = () => {

    AOS.init();
const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const fetchMovies = async () => {
        const result = await axios(`https://rewind-test.herokuapp.com/movies/featured-movies`)
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



    return  isLoading ? <h1 className="spinner"><CgSpinnerTwo/></h1> : <main>
        <section className="slider">
            <h2>
                Featured
            </h2>
          <section className="slider-container">
                {movies.map(movie => (
                    <div key={movie._id} className="slider-content-container" data-aos="fade-up" data-aos-duration="1000">
                        <section className="movie-poster">
                        <img src={movie.coverpics_url} alt="poster" />
                        <span className="movie-poster-overlay" >
                            <button onClick={(e) => toggleMovieModal(e, movie)}><FiPlay/></button>
                        </span>
                    </section>
                        <div className="carousel-movie-details-container">
                            <h5>
                                {movie.title}
                            </h5>
                            <ul className="carousel-movie-details">
                                <li>{movie.release_date}</li>
                                <li>{movie.category}</li>
                                <li>{movie.length}</li>
                            </ul>
                        </div>
                    </div>
                ))}
                <MovieModal movieModal={movieModal} selectedMovie={selectedMovie}  setMovieModal={setMovieModal} />

         </section>
    </section> 
        </main>
    
}

export {CarouselPage}



const RecentUpload = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const fetchMovies = async () => {
        const result = await axios(`https://rewind-test.herokuapp.com/movies/recently-added`)
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


    return  isLoading ? <h1 className="spinner"><CgSpinnerTwo/></h1> : <main>
        <section className="slider">
            <h2 id="recent-uploads">
                Recent Uploads
            </h2>
          <section className="recent-upload-container">
                {movies.map(movie => (
                    <div key={movie._id} className="recent-upload-content-container" data-aos="fade-up" data-aos-duration="1000">
                       <section className="movie-poster">
                        <img src={movie.coverpics_url} alt="poster" />
                        <span className="movie-poster-overlay" >
                            <button onClick={(e) => toggleMovieModal(e, movie)}><FiPlay/></button> 
                        </span>
                    </section>
                        <div className="recent-movie-details-container">
                            <h5>
                                {movie.title}
                            </h5>
                            <ul className="recent-movie-details">
                                <li>{movie.release_date}</li>
                                <li>{movie.category}</li>
                                <li>{movie.length}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            <MovieModal movieModal={movieModal} selectedMovie={selectedMovie}  setMovieModal={setMovieModal} />
         </section>
    </section> 
        </main>
    
}

export {RecentUpload }




const AllMovies = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const fetchMovies = async () => {
        const result = await axios(`https://rewind-test.herokuapp.com/movies`)
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


    return  isLoading ? <h1 className="spinner"><CgSpinnerTwo/></h1> : <main>
        <section className="slider">
            <h2 id="recent-uploads">
                All Movies
            </h2>
          <section className="recent-upload-container">
                {movies.map(movie => (
                    <div key={movie._id} className="recent-upload-content-container" data-aos="fade-up" data-aos-duration="1000">
                      <section className="movie-poster">
                        <img src={movie.coverpics_url} alt="poster" />
                        <span className="movie-poster-overlay" >
                            <button onClick={(e) => toggleMovieModal(e, movie)}><FiPlay/></button> 
                        </span>
                    </section>
                        <div className="recent-movie-details-container">
                            <h5>
                                {movie.title}
                            </h5>
                            <ul className="recent-movie-details">
                                <li>{movie.release_date}</li>
                                <li>{movie.category}</li>
                                <li>{movie.length}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            <MovieModal movieModal={movieModal} selectedMovie={selectedMovie}  setMovieModal={setMovieModal} />
         </section>
    </section> 
        </main>
    
}

export { AllMovies }
