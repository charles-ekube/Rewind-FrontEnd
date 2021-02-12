
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Userlandingpagenav } from "../../widgets";
import { Card } from "../../components";
import axios from "axios";



const Movieplayer = (props) => {

    const { state } = useLocation();

    useEffect(() => {
        console.log(state);
    });

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



    return (
        <>
            <Userlandingpagenav />
            <section className="movie-player-container">
                <video
                src={state?.movie}
                controls
                >
                    playnow abeg
                </video>
                <div className="control-ft">
                    <ul style={{color: '#fff'}}>
                        <li style={{height:'200px', width: '200px'}}>
                            {state?.thumbnail}                       
                        </li>
                        <li>{state?.category}</li>
                        <li>{state?.cast}</li>
                        <li>{state?.description}</li>
                    </ul>            
        
                    
                        
                </div>
            </section>
          
        </>
    )
}

export { Movieplayer }
