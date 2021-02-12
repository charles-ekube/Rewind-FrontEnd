import React, {useEffect, useState} from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import axios from "axios";

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

        return  isLoading ? <h1 className="spinner animate__rotateIn"><CgSpinnerTwo/></h1> : <main
        >
            <section  className="card-grid">
            {movies.map(movie => (
                <section className="movie-container-holder"  key={movie._id}>
                    <div className="movie-container"  data-aos="fade-up" data-aos-duration="1000">
                        <section className="movie-poster">
                            <img src={movie.coverpics_url} alt="poster" />
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

        return  isLoading ? <h1 className="spinner animate__rotateIn"><CgSpinnerTwo/></h1> : <main
        >
            <section  className="card-grid">
            {movies.map(movie => (
                <section className="movie-container-holder"  key={movie._id}>
                    <div className="movie-container"  data-aos="fade-up" data-aos-duration="1000">
                        <section className="movie-poster">
                            <img src={movie.coverpics_url} alt="poster" />
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
            </section>
            
        </main>
        
}

export {TabsActionCard}


