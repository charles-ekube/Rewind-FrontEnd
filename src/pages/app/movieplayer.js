
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Landingpagenav } from "../../widgets";
import axios from "axios";



const Movieplayer = (props) => {

    const { state } = useLocation();

    useEffect(() => {
        console.log(state);
    });


    return (
        <>
            <Landingpagenav />
            <section className="movie-player-container">
                <video
                src={state?.movie}
                controls
                >
                    playnow abeg
                </video>
                <div className="control-ft"></div>
            </section>
        </>
    )
}

export { Movieplayer }
