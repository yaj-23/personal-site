import React from 'react';
import './Experience.css';
import {FaGithub} from 'react-icons/fa';
import {BsBoxArrowUpRight} from 'react-icons/bs';

function Experience() {
    return (
        <>
            <div className='experience-container' id='experience'>
                <h1 className='experience-header'>
                    Experience
                </h1>

                <div className="exp-container">
                    <div className="exp-section-one">
                        <a href="http://yataradesigns.com/"><div className='exp-img-one'></div></a>
                        <a href="http://yataradesigns.com/" className='exp-link-proj'>
                            <h1 className='exp-head-one'>Yatara Design</h1>
                        </a>
                        <p1 className='exp-desc'>Co-Founder, Lead Developer/Designer</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Founded Yatara Designs, a web-dev agencey which design</p1>
                        <br/>
                        <p1 className='exp-desc-one'>and develop complete, responsive websites. We take</p1>
                        <br/>
                        <p1 className='exp-desc-one'>care of hosting services, professional logo creation.</p1>

                        <br/>
                        <a href="https://github.com/yaj-23/reactjs" className="exp-github-icon"> 
                            <BsBoxArrowUpRight/>
                        </a>
                    </div>

                    <div className="exp-section-one">
                        <a href="https://smartbus.vercel.app/"><div className='exp-img-two'></div></a>
                        <a href="https://smartbus.vercel.app/" className='exp-link-proj'>
                            <h1 className='exp-head-two'>REC Junior Design</h1>
                        </a>
                        <p1 className='exp-desc-two'>Design Engineer</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Competed in team of 4 at Ryerson Universities Biggest</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Engineering competition for Junior Design Challenge in</p1>
                        <br/>
                        <p1 className='exp-desc-one'>2020, where we placed 1st  for our Smart Bus Design,</p1>
        
                        <br/>
                        <a href="https://github.com/yaj-23/reactjs" className="exp-github-icon"> 
                            <FaGithub/>
                        </a>
                    </div>

                    <div className="exp-section-one">
                        <a href="https://cashandcell.com/"><div className='exp-img-three'></div></a>
                        <a href="https://cashandcell.com/" className='exp-link-proj'>
                            <h1 className='exp-head-three'>Cash & Cell Mart</h1>
                        </a>
                        <p1 className='exp-desc-three'>Associate/Web Developer</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Designed a responsive, modern, website using strong</p1>
                        <br/>
                        <p1 className='exp-desc-one'>sense of WordPress Design, and created a Digital Image.</p1>
                        <br/>
                        <p1 className='exp-desc-one'>Provided excellent service on a day-to-day basis.</p1>
        
                        <br/>
                        <a href="https://cashandcell.com/" className="exp-github-icon"> 
                            <BsBoxArrowUpRight/>
                        </a>
                    </div>
                </div>

                <div className='exp-mobile-sec-one'>
                    <a href="http://yataradesigns.com/"><h1 className='exp-head-one'>Yatara Design</h1></a>
                    <p1 className='exp-desc'>Co-Founder, Lead Developer/Designer</p1>
                    <p1 className='exp-desc-one'>Founded Yatara Designs, a web-dev agency  which design and develop complete, responsive websites. We completely take care of hosting services, professional email and logo creation.</p1>
                    <a href="http://yataradesigns.com/" className="exp-github-icon"> 
                        <BsBoxArrowUpRight/>
                    </a>
                </div>

                <div className='exp-mobile-sec-one'>
                    <a href="https://smartbus.vercel.app/"><h1 className='exp-head-one'>REC Junior Design</h1></a>
                    <p1 className='exp-desc'>Design Engineer</p1>
                    <p1 className='exp-desc-one'>Competed in team of 4 at Ryerson University's Biggest Engineering competition for Junior Design Challenge in 2020. We placed 1st for our Smart Bus Design, and will represnt Ryerson at OEC 2020 </p1>
                    <a href="https://github.com/yaj-23/REC_2020_BUS_WebSite" className="exp-github-icon"> 
                        <FaGithub/>
                    </a>
                </div>

                <div className='exp-mobile-sec-one'>
                    <a href="https://cashandcell.com/"><h1 className='exp-head-one'>Cash & Cell Mart</h1></a>
                    <p1 className='exp-desc'>Associate/Web Developer</p1>
                    <p1 className='exp-desc-one'>Designed a responsive, modern, website using strong sense of HTML 5/CSS/WordPress, and created a Digital Image. Provided excellent customer service on a day-to-day basis. </p1>
                    <a href="https://cashandcell.com/" className="exp-github-icon"> 
                        <BsBoxArrowUpRight/>
                    </a>
                </div>

            </div>
        </>
       
    )
}

export default Experience
