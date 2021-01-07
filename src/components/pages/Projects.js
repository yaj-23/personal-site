import React from 'react';
import './Projects.css';
import {FaGithub} from 'react-icons/fa';


function Projects() {
    return (
        <>
            <div className="projects-container">
                <h1 className='projects-header'>
                    Projects/> 
                </h1>

                <div className="sec-container">
                    <div className="section-one">
                        <div className='img-one'></div>
                        <a href="/" className='link-proj'>
                            <h1 className='head-one'>Personal React Website</h1>
                        </a>
                        <p1 className='desc-one'>Using React JS, HTML and CSS, created </p1>
                        <p1 className='desc-one-one'>this completely responsive website.</p1>
                        <br/>
                        <a href="https://github.com/yaj-23/reactjs" className="github-icon"> 
                            <FaGithub/>
                        </a>
                        
                    </div>

                    <div className="section-two">
                        <div className='img-two'></div>
                        <a href="https://smartbus.vercel.app/" className='link-proj'>                        
                            <h1 className='head-one'>REC Project Website</h1>
                        </a>
                        <p1 className='desc-two'>Using React JS, HTML and CSS, created this website for </p1>
                        <p1 className='desc-two-two'>Smart Bus Design which won 1st place for Juniour </p1>
                        <p1 className='desc-two'>Design at Ryerson's Engineering Competition, 2020</p1>
                        <a href="https://github.com/yaj-23/REC_2020_BUS_WebSite" className="github-icon"> 
                            <FaGithub/>
                        </a>
                    </div>

                    <div className="section-one">
                        <div className='img-three'></div>
                        <h1 className='head-one'>Xplor To</h1>
                        <p1 className='desc-two'>Using Android Studio Framework, I created a  Restaurant/ </p1>
                        <p1 className='desc-two'>Food Shop Guide Application for Android users.</p1>
                        <br/>
                        <p1 className='desc-two-two'>This is created using Java, and Firebase Console</p1>
                        <a href="https://github.com/yaj-23/XplorToronto" className="github-icon"> 
                            <FaGithub/>
                        </a>
                    </div>

            

                </div>

            </div>
        </>      
    )
}

export default Projects
