import React from 'react'
import "../styles/GetInTouch.css"
import img1 from "../images/akatLogo.png";
export default function GetInTouch() {
    return (
        <div id="in-touch">
            <div className='titleContainer'>
                <div className='akatSymbol'>
                    <img src={img1} alt="" className='akatsukiImage' />
                </div>
                <div className='title'>
                    Get In Touch
                </div>
                <hr className='solid' />
            </div>
            <div className='rowContainer2'>
                <div className='descriptionContainer'>
                    <p className='pText'>
                        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    <button className='hiButton'>
                        Say hi
                    </button>
                    <p className='footer'>
                        <p>    Designed & Built by Sanjay Deoram</p>

                    </p>
                </div>
            </div>
        </div>
    )
}
