import React from 'react'
import { useState, useEffect } from 'react';
import "../styles/AboutMe.css";
import img0 from "../images/akatLogo.png";
import img1 from "../images/goatApp.png";
import img2 from "../images/food4Cause.png";
import img3 from "../images/spamDetector.png";
import github from "../images/github.png";
import styles from "../styles/PersonalProjects.module.css"
import Carousel from "nuka-carousel";
import Fade from 'react-reveal/Fade';
export default function PersonalProjects() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 770;
    return (
        <>
            {!isMobile ?
                <div id="personal-projects">
                    <div className={styles.personal}>
                        <Fade bottom>
                            <div className='titleContainer'>
                                <div className='akatSymbol'>
                                    <img src={img0} alt="" className='akatsukiImage' />
                                </div>
                                <div className='title'>
                                    Personal Projects
                                </div>
                                <hr className='solid' />
                            </div>
                        </Fade>
                        <div className={styles.carouselContainer}>
                            <Fade bottom>
                                <Carousel >
                                    <a href="https://github.com/BrandonDeoram/GoatApp">
                                        <img src={img1} alt='bruh' className={styles.carouselItem} />
                                    </a>
                                    <a href="https://github.com/BrandonDeoram/Food4Cause">
                                        <img src={img2} alt='email' className={styles.carouselItem} />
                                    </a>
                                    <a href="https://github.com/BrandonDeoram/SpamDetector">
                                        <img src={img3} alt='blank' className={styles.carouselItem} />
                                    </a>
                                </Carousel>
                            </Fade>
                        </div>
                    </div>
                    <div className={styles.personal}>
                        <Fade bottom>
                            <div className='titleContainer'>
                                <div className='akatSymbol'>
                                    <img src={img0} alt="" className='akatsukiImage' />
                                </div>
                                <div className='title'>
                                    More Projects
                                </div>
                                <hr className='solid' />
                            </div>
                        </Fade>
                        <div className={styles.gridContainer}>
                            <Fade bottom>
                                <div className={styles.moreProjectsCard}>
                                    <div className={styles.moreProjectsCardRow}>
                                        <a href="https://github.com/BrandonDeoram/GoatApp">
                                            <img src={github} alt='blank' height='30px' />
                                        </a>
                                    </div>
                                    <p className={styles.titleCard}>
                                        Goat Shoe App
                                    </p>

                                    <p className={styles.descriptionCard}>
                                        Developed an interactive UI using Flutter/Dart and Provider to deliver an E-commerce shop app.
                                    </p>
                                    <p className={styles.descriptionCard}>
                                        Flutter, Dart, Firebase
                                    </p>
                                </div>
                                <div className={styles.moreProjectsCard}>
                                    <div className={styles.moreProjectsCardRow}>
                                        <a href="https://github.com/BrandonDeoram/GeassApp">
                                            <img src={github} alt='blank' height='30px' />
                                        </a>
                                    </div>
                                    <p className={styles.titleCard}>
                                        Geass App
                                    </p>

                                    <p className={styles.descriptionCard}>
                                        Developed an anime watch list app , Pulls data from MyAnimeWatchList api and allows user to import their current watchlist
                                    </p>
                                    <p className={styles.descriptionCard}>
                                        Flutter, Dart, Firebase,Jikan's API
                                    </p>
                                </div>
                                <div className={styles.moreProjectsCard}>
                                    <div className={styles.moreProjectsCardRow}>
                                        <a href="https://github.com/BrandonDeoram/Food4Cause">
                                            <img src={github} alt='blank' height='30px' />
                                        </a>
                                    </div>
                                    <p className={styles.titleCard}>
                                        Food4Cause
                                    </p>

                                    <p className={styles.descriptionCard}>
                                        Created a mock charity mobile app for my mobile developemnt class.
                                    </p>
                                    <p className={styles.descriptionCard}>
                                        Flutter, Dart, SQLITE
                                    </p>
                                </div>
                                <div className={styles.moreProjectsCard}>
                                    <div className={styles.moreProjectsCardRow}>
                                        <a href="https://github.com/BrandonDeoram/Chat-Client-Server">
                                            <img src={github} alt='blank' height='30px' />
                                        </a>
                                    </div>
                                    <p className={styles.titleCard}>
                                        Chat Client Server
                                    </p>

                                    <p className={styles.descriptionCard}>
                                        A mock instant messaging program that communicates over TCP using sockets.
                                    </p>
                                    <p className={styles.descriptionCard}>
                                        C, C++
                                    </p>
                                </div>
                                <div className={styles.moreProjectsCard}>
                                    <div className={styles.moreProjectsCardRow}>
                                        <a href="https://github.com/BrandonDeoram/SpamDetector">
                                            <img src={github} alt='blank' height='30px' />
                                        </a>
                                    </div>
                                    <p className={styles.titleCard}>
                                        Spam Detector
                                    </p>

                                    <p className={styles.descriptionCard}>
                                        Implemented a robust Java application for high-volume spam email detection.
                                    </p>
                                    <p className={styles.descriptionCard}>
                                        Java
                                    </p>
                                </div>
                                <div className={styles.moreProjectsCard}>
                                    <div className={styles.moreProjectsCardRow}>
                                        <a href="https://github.com/BrandonDeoram/ReactBlog ">
                                            <img src={github} alt='blank' height='30px' />
                                        </a>
                                    </div>
                                    <p className={styles.titleCard}>
                                        React Blog
                                    </p>

                                    <p className={styles.descriptionCard}>
                                        Created a simple blog using React
                                    </p>
                                    <p className={styles.descriptionCard}>
                                        HTML/CSS, React
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div> :
                <div className={styles.personal}>
                    <div className='titleContainer'>
                        <div className='akatSymbol'>
                            <img src={img0} alt="" className='akatsukiImage' />
                        </div>
                        <div className='title'>
                            More Projects
                        </div>
                        <hr className='solid' />
                    </div>
                    <div className={styles.gridContainer}>
                        <div className={styles.moreProjectsCard}>
                            <div className={styles.moreProjectsCardRow}>
                                <a href="https://github.com/BrandonDeoram/GoatApp">
                                    <img src={github} alt='blank' height='30px' />
                                </a>
                            </div>
                            <p className={styles.titleCard}>
                                Goat Shoe App
                            </p>

                            <p className={styles.descriptionCard}>
                                Developed an interactive UI using Flutter/Dart and Provider to deliver an E-commerce shop app.
                            </p>
                            <p className={styles.descriptionCard}>
                                Flutter, Dart, Firebase
                            </p>
                        </div>
                        <div className={styles.moreProjectsCard}>
                            <div className={styles.moreProjectsCardRow}>
                                <a href="https://github.com/BrandonDeoram/Geass">
                                    <img src={github} alt='blank' height='30px' />
                                </a>
                            </div>
                            <p className={styles.titleCard}>
                                Geass App
                            </p>

                            <p className={styles.descriptionCard}>
                                Developed an anime watch list app , Pulls data from MyAnimeWatchList api and allows user to import their current watchlist
                            </p>
                            <p className={styles.descriptionCard}>
                                Flutter, Dart, Firebase,Jikan's API
                            </p>
                        </div>
                        <div className={styles.moreProjectsCard}>
                            <div className={styles.moreProjectsCardRow}>
                                <a href="https://github.com/BrandonDeoram/Food4Cause">
                                    <img src={github} alt='blank' height='30px' />
                                </a>
                            </div>
                            <p className={styles.titleCard}>
                                Food4Cause
                            </p>

                            <p className={styles.descriptionCard}>
                                Created a mock charity mobile app for my mobile developemnt class.
                            </p>
                            <p className={styles.descriptionCard}>
                                Flutter, Dart, SQLITE
                            </p>
                        </div>
                        <div className={styles.moreProjectsCard}>
                            <div className={styles.moreProjectsCardRow}>
                                <a href="https://github.com/BrandonDeoram/Chat-Client-Server">
                                    <img src={github} alt='blank' height='30px' />
                                </a>
                            </div>
                            <p className={styles.titleCard}>
                                Chat Client Server
                            </p>

                            <p className={styles.descriptionCard}>
                                A mock instant messaging program that communicates over TCP using sockets.
                            </p>
                            <p className={styles.descriptionCard}>
                                C, C++
                            </p>
                        </div>
                        <div className={styles.moreProjectsCard}>
                            <div className={styles.moreProjectsCardRow}>
                                <a href="https://github.com/BrandonDeoram/SpamDetector">
                                    <img src={github} alt='blank' height='30px' />
                                </a>
                            </div>
                            <p className={styles.titleCard}>
                                Spam Detector
                            </p>

                            <p className={styles.descriptionCard}>
                                Implemented a robust Java application for high-volume spam email detection.
                            </p>
                            <p className={styles.descriptionCard}>
                                Java
                            </p>
                        </div>
                        <div className={styles.moreProjectsCard}>
                            <div className={styles.moreProjectsCardRow}>
                                <a href="https://github.com/BrandonDeoram/ReactBlog ">
                                    <img src={github} alt='blank' height='30px' />
                                </a>
                            </div>
                            <p className={styles.titleCard}>
                                React Blog
                            </p>

                            <p className={styles.descriptionCard}>
                                Created a simple blog using React
                            </p>
                            <p className={styles.descriptionCard}>
                                HTML/CSS, React
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}
