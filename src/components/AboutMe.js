import React from 'react'
import "../styles/AboutMe.css";
import img1 from "../images/akatLogo.png";
import me from "../images/me.jpg";
export default function AboutMe() {
    return (
        <div id="aboutme">
            <div className='titleContainer'>
                <div className='akatSymbol'>
                    <img src={img1} alt="" className='akatsukiImage' />
                </div>
                <div className='title'>
                    About Me
                </div>
                <hr className='solid' />
            </div>
            <div className='rowContainer'>
                <div className='descriptionContainer'>
                    I am currently a 4th-year university student studying Computer Science at Ontario Tech University. I love to create mobile applications that benefit me and my friends as well as automate easy tasks using python and other languages. I code for fun in my free time, there's just so much I want to learn and create that it's hard choosing one to project focus on.
                </div>
                <div>
                    <img className='meContainer' src={me} alt="" />
                </div>
            </div>
        </div>
    )
}
