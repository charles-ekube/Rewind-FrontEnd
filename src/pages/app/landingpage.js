import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card } from "../../components";
import { Landingpagenav } from "../../widgets"
import { Carousel } from "react-bootstrap";
import { LandingCarousel } from "../../assets";
import "./app.css";
const Landingpage = () => {

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

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Landingpagenav />

            <section className="intro-section">
                {/* <div className="overlay">
                    <h1>Relive Your Childhood</h1>
                    <h4>Through Movies</h4>
                    <button>Get Started</button>
                </div> */}
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-500"
                            src={LandingCarousel}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Sound Of Music</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={LandingCarousel}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Sound Of Music</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={LandingCarousel}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Sound Of Music</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section>
                <Card isLoading={isLoading} movies={movies} />
            </section>

        </>
    )
}

export { Landingpage }
