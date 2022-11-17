import React from 'react'
import "../styles/AboutMe.css";
import styles from "../styles/Experience.module.css"
import img1 from "../images/akatLogo.png";
import Fade from 'react-reveal/Fade';
export default function Experience() {
    const languages = ["HTML", "CSS", "Javascript", "React.js", "Flask"];
    const languages2 = ["C", "C++"];
    return (
        <div id="experience">
            <div id={styles.experience}>
                <Fade bottom>
                    <div className='titleContainer'>
                        <div className='akatSymbol'>
                            <img src={img1} alt="" className='akatsukiImage' />
                        </div>
                        <div className='title'>
                            Experience
                        </div>
                        <hr className='solid' />
                    </div>
                </Fade>
                <div className={styles.rowContainer}>
                    <Fade bottom>
                        <div className={styles.columnContainer}>
                            <p className={styles.companyContainer}>
                                Software Developer Internship @&nbsp;<span className={styles.redText}>NCFDC</span>
                            </p>
                            <p className={styles.position}>
                                May 2022 - Present
                            </p>
                            <ul className={styles.listContainer}>
                                <li>Collaborated autonomously in a fast-paced start-up team at Rubicon and created an online reporting system for
                                    Cobourg Police Service</li>
                                <li> Optimized database processing time by decreasing query time by 18%</li>
                                <li>Leveraged MongoDB and Flask back end with intuitive React front end to create Freedom of Incident report</li>
                            </ul>
                            <div className={styles.rowLang}>
                                {languages.map(function (d) {
                                    return (
                                        <p className={styles.lang} key={d.toString()}>{d}</p>
                                    )
                                })}
                            </div>

                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.columnContainer}>
                            <p className={styles.companyContainer}>
                                First Robotics Leader @&nbsp;<span className={styles.redText}> JCR</span>
                            </p>
                            <p className={styles.position}>
                                September 2018 - June 2019
                            </p>
                            <ul className={styles.listContainer}>
                                <li> Lead a team to design a robot capable of completing challenges such as traversing over rough domains, shooting
                                    projectiles accurately, and climbing
                                </li>
                                <li>Developed mechanical systems using pneumatics, motors, micro-controllers, sensors, and circuit</li>
                                <li>Designed the physical architecture of different mechanical and electrical systems present in the robot
                                </li>
                            </ul>
                            <div className={styles.rowLang}>
                                {languages2.map(function (f) {
                                    return (
                                        <p className={styles.lang} key={f.toString()}>{f} </p>
                                    )
                                })}
                            </div>
                        </div>
                    </Fade>


                </div>
            </div>
        </div>

    )
}
