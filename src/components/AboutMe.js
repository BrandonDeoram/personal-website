import React from 'react'
import "../styles/AboutMe.css";
import img1 from "../images/akatLogo.png";
import me from "../images/me.jpg";
import Fade from 'react-reveal/Fade';
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
                <div className='descriptionContainer1'>
                    <Fade bottom>
                        <p>
                            I am currently a <span className='redText'>4th</span>-year university student studying Computer Science at <span className='redText'> Ontario Tech University</span>. I love to create <span className='redText'> mobile applications</span> that benefit me and my friends as well as automate easy tasks using python and other languages. I code for fun in my free time, there's just so much I want to learn and create that it's hard choosing one to project focus on.
                        </p>
                    </Fade>
                    <Fade bottom>
                        <div className='technologyTitle'>
                            Here are some of the tehcnologies i've used:
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='grid-container'>
                            <ul>
                                <li>Javascipt</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Flutter</li>
                                <li>Python</li>
                                <li>Html/Css</li>
                            </ul>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='outside'>
                            Outside of school, I love to build different keyboards , as well as computers.
                        </div>
                    </Fade>


                </div>
                <div>
                    <img className='meContainer' src={me} alt="" />
                </div>
            </div>
        </div>
    )
}
