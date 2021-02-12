import React, { useState, useEffect } from 'react'
import { TabsCard, TabsActionCard, TabNav, Tab, CarouselPage, RecentUpload, AllMovies } from "../../components";
import { Footer, Landingpagenav } from "../../widgets";
import { Carousel } from "react-bootstrap";
import { HomeAlone, GodFather, SoundofMusic } from "../../assets";
import {Link} from "react-router-dom";
import "./app.css";
import "../../components/tabs/tabs.css";


const Landingpage = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };

    const [slider, setSlider] = useState(0)
    const handleSlider = (selectedSlider, e) => {
        setSlider(selectedSlider);
    }

    const [selected, setSelected] = useState("Home");

    useEffect((tab) => {
        setSelected(tab);
    }, [])

    return (
        <>
            <Landingpagenav />

            <section className="intro-section">
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Relive Your Childhood</h2>
                        <h4>Through Movies</h4>
                        <h6>Stream 15 minutes of movie content for free</h6>
                        <button><Link to="/SignUp">Get Started</Link></button>
                    </div>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={HomeAlone}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={GodFather}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SoundofMusic}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="featured-movies">
                <CarouselPage />
            </section>
            <section className="recent-uploads">
                <RecentUpload />
            </section>
            <section className="all-movies">
                <AllMovies/>
            </section>
            <Footer />
        </>
    )
}

export { Landingpage }
