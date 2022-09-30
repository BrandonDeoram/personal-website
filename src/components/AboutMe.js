import React from 'react'
import "../styles/AboutMe.css";
import img1 from "../images/akatLogo.png";
export default function AboutMe() {
    return (
        <div id="aboutme">
            <div className='titleContainer'>
                <div className='akatSymbol'>
                    <img src={img1} alt="" className='akatsukiImage' />
                </div>
                <p className='title'>About Me</p>
                <hr className='solid' />

            </div>
        </div>
    )
}
