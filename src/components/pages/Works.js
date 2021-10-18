import React from 'react';
import './Works.css';


function Works(){

    return(
        <>
            <div className='works-container' id='experience'>
                <h1 className='header_line'>Professional Experience.</h1>
                
                {/* <a href="src\components\YajurvaTrivediResume.pdf" download>Download Resume</a> */}
                <div className='works-experience'>
                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Project Manager</h2>
                            <h5 className="work-company">CEN 100 - Intro To Engineering | Ryerson University</h5>
                            <h5 className="work-date">August 2021 - Present</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc"> Currently managing 30 First-Year Engineering Students with their Introduction to Engineering Course. 
                                As PM, I host multiple MATLAB tutorials tailoring assignments given to students for learning purposes, along with team-building sessions for
                                design project competition. I support the Graduate Assistant and Professor with student team project management, teaching MATLAB to ensure the success of students enrolled in course.</p1>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Front-End Developer</h2>
                            <h5 className="work-company">Crossroads Free Methodist Church</h5>
                            <h5 className="work-date">June 2021 - August 2021</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc"> Designed user interface models for two websites based on modern principles while abiding by the AODA rules.
                            Created web templates using HTML/CSS, JavaScript on WordPress for the organization for 3+ sites.
                            Constructed a container application for storing and accessing video seminars, notifying for individuals who own
the application worldwide.</p1>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Founder & Lead Developer</h2>
                            <h5 className="work-company">Yatara Designs.</h5>
                            <h5 className="work-date">May 2020 - Present</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc">Led the Yatara Designs development and marketing team to create tailored websites and logos for 5+ clients
while branding and managing digital presence. Integrated key SEO techniques to optimize the scores (in SEOBILITY) of each website by at least 25-33%. </p1>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Web Developer</h2>
                            <h5 className="work-company">Cash & Cell Mart </h5>
                            <h5 className="work-date">May 2020 - September 2020</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc">Utilized front-end framework design tools (Figma) to construct the layout for a webpage.
                                Published 1 completely responsive website using (JS, HTML/CSS) frameworks to promote company digitally.
                                Improved SEO Scores by 50% (on SEOBILITY) and used key strategies to acquire higher customer volume.
                            </p1>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Web Developer</h2>
                            <h5 className="work-company">TETRA Ryerson </h5>
                            <h5 className="work-date">February 2021 - Present</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc">

                            Constructed and deployed modern website utilizing concepts of HTML5/CSS and JavaScript to promote event
                            information for Tetra Ryerson, reaching the student body across Ryerson University.
                            Collaborated with graphic designers and marketing team to generate UX/UI designs and palettes for Tetra
                            Ryerson's website while implementing strategies to scale them from initial design to release.
                            </p1>
                        </div>
                    </div>
                    

                </div>

            </div>
        </>
    )
}

export default Works