import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card, TabNav, Tab } from "../../components";
import { Footer, Landingpagenav } from "../../widgets"
import { Carousel } from "react-bootstrap";
import { HomeAlone, GodFather, SoundofMusic } from "../../assets";
import "./app.css";
import "../../components/tabs/tabs.css";


const Landingpage = (props) => {

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


    // const [moviesbycategory, setMoviesByCategory] = useState([]);
    // // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchMoviesByCategory = async () => {
    //         const resullt = await axios(`https://rewind-test.herokuapp.com/movies`)
    //         console.log(resullt.data.message);

    //         setMovies(resullt.data.message);
    //         // setIsLoading(false);
    //     }
    //     fetchMoviesByCategory();
    // }, [])

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
    },[])

    return (
        <>
            <Landingpagenav />

            <section className="intro-section">
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Relive Your Childhood</h2>
                        <h4>Through Movies</h4>
                        <h6>Stream 15 minutes of movie content for free</h6>
                        <button>Get Started</button>
                    </div>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block  h-500"
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
            <section>
           
                <Card 
                isLoading={isLoading} 
                movies={movies} 
                // toggleMovieModal={toggleMovieModal}  
                // setMovieModal={setMovieModal}
                // movieModal={movieModal}
                
                />
                {/* <MovieModal movies={movies}/> */}
            </section>
            <section>
                <TabNav tabs={['Home', 'Settings', 'Profile']} selected={selected} setSelected={setSelected}>
                    <Tab isSelected={selected === 'Home'}>
                        <p>dhdhdhdhdh</p>
                    </Tab>
                    <Tab isSelected={selected === 'Settings'}>
                        <p>sdjdnccudjcdcd</p>                        
                    </Tab>
                    <Tab isSelected={selected === 'Profile'}>
                        <p>ddcodcodcdocdoc</p>
                    </Tab>
                </TabNav>
            </section>     
            <section>
            <Carousel activeIndex={slider} onSelect={handleSlider}>
                    
                    {movies.map(movie => (
                        
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={movie.coverpics_url}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    ))}
                    
                </Carousel>
            </section>       
            <Footer/>
        </>
    )
}

export { Landingpage }
