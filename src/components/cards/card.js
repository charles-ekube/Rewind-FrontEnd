import React, {useState} from 'react';
import "./cards.css";
import {MovieModal} from "../../components";
import {Playicon} from "../../assets"
import AOS from "aos";
import 'aos/dist/aos.css'
import {Link } from "react-router-dom";

const Card = ({ movies, isLoading }) => {
    AOS.init();

   
    const [movieModal, setMovieModal] = useState(false);

    const toggleMovieModal = () => {
      setMovieModal(prev => !prev);
    }

    // const [query, setQuery] = useState('');
    // const [movies, setMovies] = useState([]);
    // const getMovies = async(e) => {
    //     e.preventDefault();
    //     // console.log("ec det weor,l")
    //     // const query = "Karashika";
    //     const url = `https://rewind-test.herokuapp.com/movies/search/movie?title=${query}`;
        
    //     try {
            
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         // console.log(data);
    //         setMovies(data.result);
    //     }catch(err) {
    //         console.error(err); 
    //     }
    

    // }

  const  currentVideo = (currentMovie) => {
console.log(currentMovie);
    }
    return isLoading ? <h1>Loading....</h1> : <main className="card-grid">
        {/* this.state.movies = movies */}
            {movies.map( movie => (
                // <h1>{movie.title}</h1>
                <section className="movie-container-holder" key={movie._id}>
                    <div className="movie-container" >
                        <section className="movie-poster">
                            <img src={movie.coverpics_url} alt="poster" />
                            <span className="movie-poster-overlay" onclick={toggleMovieModal}>
                                
                                {/* <Link to={`/movieplayer/${movie._id}`}>
                                
                                
                                </Link> */}
                                {/* <iframe src={movie.movie_url}>
                                       
                                </iframe> */}
                                <img src={Playicon} alt='play' onclick={currentVideo(movie)}/>
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
                        <MovieModal movieModal={movieModal} setMovieModal={setMovieModal}/>
                    </div>
                </section>
            ))}
    </main>
    // return (
    //     <main>
    //     <section className="card-container">
    //         <div className="card-body">
    //             <section className="card-image">
    //                 <img src={Junglebook} alt="poster"/> 
    //             </section>
    //             <section className="card-title">
    //                 <h4>Card Title</h4>
    //             </section>
    //             <section className="card-text">
    //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
    //             </section>
    //             <footer className="card-footer">
    //                 <a href="google.com">Learn More</a>
    //             </footer>
    //         </div>
    //     </section>
      
    //     </main>
        
    // )
}

export {Card}
