import React from 'react'
import "../styles/Home.css";
import img1 from "../images/akatLogo.png";
import img2 from "../images/linkedin.png";
import Typewriter from 'typewriter-effect';
import github from "../images/github.png";
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
                     <span className='iconSet'>
                        <a href="https://github.com/BrandonDeoram/GoatApp" className='icon'>
                        <img src={github} alt='blank' height='30px' />
                      
                    </a>
                        <a href="https://github.com/BrandonDeoram/GoatApp">
                            <img src={img2} alt='blank' height='30px' />
                        </a></span>



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
