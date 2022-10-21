import React from 'react'
import "../styles/AboutMe.css";
import img0 from "../images/akatLogo.png";
import img1 from "../images/goatApp.png";
import img2 from "../images/food4Cause.png";
import img3 from "../images/spamDetector.png";
import styles from "../styles/PersonalProjects.module.css"
import Carousel from "nuka-carousel";
export default function PersonalProjects() {
    return (
        <div id="personal-projects">
            <div className={styles.personal}>
                <div className='titleContainer'>
                    <div className='akatSymbol'>
                        <img src={img0} alt="" className='akatsukiImage' />
                    </div>
                    <div className='title'>
                        Personal Projects
                    </div>
                    <hr className='solid' />
                </div>
                <div className={styles.carouselContainer}>
                    <Carousel >
                        <a href="https://github.com/BrandonDeoram/GoatApp">
                            <img src={img1} alt='bruh' className={styles.carouselItem} />
                        </a>
                        <img src={img2} alt='email' className={styles.carouselItem} />
                        <img src={img3} alt='blank' className={styles.carouselItem} />
                    </Carousel>
                </div>
            </div>
        </div>


    )
}
