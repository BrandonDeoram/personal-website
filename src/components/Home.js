import React from 'react'
import "../styles/Home.css";
import img1 from "../images/akatLogo.png";
import Typewriter from 'typewriter-effect';
export default function Home() {
    return (
        <div id="home">
            <div className='intro'>
                <Typewriter options={{
                    loop:true,
                    strings: ['hi, Sanjay here.'],
                    autoStart: true,
                    deleteSpeed:1000000,
                }}></Typewriter>
            </div>
            <div className='akatContainer'>
                <img src={img1} alt="" className='akatsukiImage' />
            </div>

        </div>
    )
}
