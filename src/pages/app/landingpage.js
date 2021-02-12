import React, { useState, useEffect } from 'react'
import axios from "axios";
import { TabsCard, TabsActionCard, TabNav, Tab, CarouselPage, RecentUpload } from "../../components";
import { Footer, Landingpagenav } from "../../widgets"
import { Carousel } from "react-bootstrap";
import { HomeAlone, GodFather, SoundofMusic } from "../../assets";
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
                        <button>Get Started</button>
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
            <section>
                <TabNav tabs={['Adventure', 'Comedy', 'Horror', 'Action', 'Romance', 'Drama', 'Sci-fi', 'Mystery', 'Animation', 'Nigerian', 'Others']} selected={selected} setSelected={setSelected}>
                    <Tab isSelected={selected === 'Adventure'}>
                        <TabsCard />
                    </Tab>
                    <Tab isSelected={selected === 'Comedy'}>
                        <p>sdjdnccudjcdcd</p>
                    </Tab>
                    <Tab isSelected={selected === 'Horror'}>
                        <p>ddcodcodcdocdoc</p>
                    </Tab>
                    <Tab isSelected={selected === 'Action'}>
                        <TabsActionCard />
                    </Tab>
                    <Tab isSelected={selected === 'Romance'}>
                        <TabsActionCard />
                    </Tab>
                    <Tab isSelected={selected === 'Drama'}>
                        <TabsActionCard />
                    </Tab>
                    <Tab isSelected={selected === 'Sci-fi'}>
                        <TabsActionCard />
                    </Tab>
                    <Tab isSelected={selected === 'Mystery'}>
                        <TabsActionCard />
                    </Tab>
                    <Tab isSelected={selected === 'Animation'}>
                        <TabsActionCard />
                    </Tab>
                    <Tab isSelected={selected === 'Nigerian'}>
                        <TabsActionCard />
                    </Tab>
                    <Tab isSelected={selected === 'Others'}>
                        <TabsActionCard />
                    </Tab>
                </TabNav>
            </section>
            <Footer />
        </>
    )
}

export { Landingpage }
