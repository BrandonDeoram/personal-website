import React from 'react'
import "../styles/Home.css";
import img1 from "../images/akatLogo.png";
import Typewriter from 'typewriter-effect';
export default function Home() {
    return (
        <div id="home">
            <div className='intro'>
                <div className='typeWriter'>
                    <Typewriter options={{
                        strings: ['hi, Sanjay here.'],
                        autoStart: true,
                        deleteSpeed: 1000000,
                    }} ></Typewriter>
                </div>
                <div className='welcome'>
                    Welcome to The <span className='akatWritting'> AKATSUKI</span>
                </div>
                <div className='description'>
                    I'm a software developer based in Toronto. A few interest have are in full-stack development, mobile devleopment, human-computer interactions, and everything in between.
                </div>
                <div className='resumeContainer'>
                    <button className='resumeButton'>
                        Resume
                    </button>

                </div>
            </div>
            <div className='akatContainer'>
                <img src={img1} alt="" className='akatsukiImage' />
            </div>

        </div>
    )
}
