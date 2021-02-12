import React, {useState, useEffect} from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import axios from "axios"
import "./carousel.css";


const CarouselPage = () => {


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



    return  isLoading ? <h1 className="spinner"><CgSpinnerTwo/></h1> : <main>
        <section className="slider">
            <h2>
                Featured
            </h2>
          <section className="slider-container">
                {movies.map(movie => (
                    <div key={movie._id} className="slider-content-container">
                        <img src={movie.coverpics_url} alt="coverpic"/>
                        <div className="carousel-movie-details-container">
                            <h5>
                                {movie.title}
                            </h5>
                            <ul className="carousel-movie-details">
                                <li>{movie.release_date}</li>
                                <li>{movie.category}</li>
                                <li>2hr 3mins</li>
                            </ul>
                        </div>
                    </div>
                ))}
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


    return  isLoading ? <h1 className="spinner"><CgSpinnerTwo/></h1> : <main>
        <section className="slider">
            <h2 id="recent-uploads">
                Recent Uploads
            </h2>
          <section className="recent-upload-container">
                {movies.map(movie => (
                    <div key={movie._id} className="recent-upload-content-container">
                        <img src={movie.coverpics_url} alt="coverpic"/>
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
         </section>
    </section> 
        </main>
    
}

export {RecentUpload }