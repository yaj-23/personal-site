import React from 'react';
import './Experience.css';
import {FaGithub} from 'react-icons/fa';


function Experience() {
    return (
        <>
            <div className='experience-container'>
                <h1 className='experience-header'>
                    Work Experience
                </h1>

                <div className="exp-container">
                    <div className="exp-section-one">
                        <a href="http://yataradesigns.com/"><div className='exp-img-one'></div></a>
                        <a href="http://yataradesigns.com/" className='exp-link-proj'>
                            <h1 className='exp-head-one'>Yatara Design</h1>
                        </a>
                        <p1 className='exp-desc'>Co-Founder, Lead Developer/Designer</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Founded Yatara Designs, a web-dev agencey which design and </p1>
                        <p1 className='exp-desc-one'>develop complete, responsive websites. We completely take</p1>
                        <br/>
                        <p1 className='exp-desc-one'>care of hosting services, professional email and logo creation. </p1>

                        <br/>
                        <a href="https://github.com/yaj-23/reactjs" className="github-icon"> 
                            <FaGithub/>
                        </a>
                    </div>

                    <div className="exp-section-two">
                        <a href="/"><div className='exp-img-two'></div></a>
                        <a href="http://yataradesigns.com/" className='exp-link-proj'>
                            <h1 className='exp-head-two'>REC Junior Design</h1>
                        </a>
                        <p1 className='exp-desc-two'>Design Engineer</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Competed in team of 4 at Ryerson Universities Biggest Engineering </p1>
                        <p1 className='exp-desc-one'>competition for Junior Design Challenge in 2020. We placed 1st </p1>
                        <br/>
                        <p1 className='exp-desc-one'> for our Smart Bus Design, and will represnt Ryerson at OEC 2020</p1>
        
                        <br/>
                        <a href="https://github.com/yaj-23/reactjs" className="github-icon"> 
                            <FaGithub/>
                        </a>
                    </div>

                    <div className="exp-section-two">
                        <a href="/"><div className='exp-img-three'></div></a>
                        <a href="http://yataradesigns.com/" className='exp-link-proj'>
                            <h1 className='exp-head-three'>Cash & Cell Mart</h1>
                        </a>
                        <p1 className='exp-desc-three'>Associate/Web Developer</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Designed a responsive, modern, website using strong sense of </p1>
                        <br/>
                        <p1 className='exp-desc-one'>HTML 5/CSS/WordPress, and created a Digital Image.</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Provided excellent customer service on a day-to-day basis.</p1>
        
                        <br/>
                        <a href="https://github.com/yaj-23/reactjs" className="github-icon"> 
                            <FaGithub/>
                        </a>
                    </div>

                    <div className='mobile-sec-one'>
                        <h1 className='head-one'>Personal React Website</h1>
                        <p1 className='desc-one'>Using React JS, HTML and CSS, created this completely responsive website.</p1>
                        <a href="https://github.com/yaj-23/REC_2020_BUS_WebSite" className="github-icon"> 
                            <FaGithub/>
                        </a>
                    </div>

                   

                </div>
            </div>
        </>
       
    )
}

export default Experience
