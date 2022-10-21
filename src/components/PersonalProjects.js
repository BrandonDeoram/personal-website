import React from 'react'
import "../styles/AboutMe.css";
import img1 from "../images/akatLogo.png";
import styles from "../styles/PersonalProjects.module.css"
import Carousel from "nuka-carousel";
export default function PersonalProjects() {
    var list = [<img src="src/images/akatLogo.png" alt='idk' />,
    <img src="src/images/email.png" alt='idk' />,
    <img src="src/images/me.jpg" alt='idk' />];
    return (
        <div id="personal-projects">
            <div className={styles.personal}>
                <div className='titleContainer'>
                    <div className='akatSymbol'>
                        <img src={img1} alt="" className='akatsukiImage' />
                    </div>
                    <div className='title'>
                        Personal Projects
                    </div>
                    <hr className='solid' />
                </div>
                <div className={styles.carouselContainer}>
                    <Carousel >
                        <img src={img1} alt='bruh' />
                        <img src="../images/email.png" alt='idkasdddddddd' />
                        <img src="../images/me.jpg" alt='iasddkddddddddddddddddddd' />
                    </Carousel>
                </div>
            </div>
        </div>


    )
}
