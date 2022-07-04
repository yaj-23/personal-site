import React from 'react';
import './Works.css';
    
function Works(){

        return(
        <>
            <div className='works-container' id='experience'>
                <h1 className='header_line'>Professional Experience.</h1>
                
                <div className='works-experience'>

                
                <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Developer Assistant</h2>
                            <h5 className="work-company">EiQ Technologies Inc</h5>
                            <h5 className="work-date">November 2021 - March 2022</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc">• Developed the dashboard views on the mobile application while integrating data stored in the NoSQL database.
                            <br></br>• Incorporated flutter widgets to create two games to determine the end-users current emotional state, which is used to train the Emotion AI.
                            <br></br>• Integrated vital design aspects into a prototype using Flutter and Firebase for authentication purposes. 
                            </p1>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Project Manager</h2>
                            <h5 className="work-company">CEN 100 - Intro To Engineering | Ryerson University</h5>
                            <h5 className="work-date">August 2021 - December 2021</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc">• Managed 30 First-Year Engineering Students with their Introduction to Engineering Course. 
                                <br></br>• Hosted multiple MATLAB tutorials tailoring assignments, along with team-building sessions for design project competition. 
                                <br></br>• Supported the Graduate Assistant with student team management.</p1>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Web Developer</h2>
                            <h5 className="work-company">TETRA Ryerson </h5>
                            <h5 className="work-date">February 2021 - March 2022</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc">
                            • Constructed and deployed modern website utilizing concepts of HTML5/CSS and JavaScript to promote event
                            information for Tetra Ryerson, reaching the student body across Ryerson University.
                           <br></br> • Collaborated with graphic designers and marketing team to generate UX/UI designs and palettes for Tetra
                            Ryerson's website while implementing strategies to scale them from initial design to release.
                            </p1>
                            
                        </div>
                    </div>
                    

                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Front-End Developer</h2>
                            <h5 className="work-company">Crossroads Free Methodist Church</h5>
                            <h5 className="work-date">June 2021 - August 2021</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc">• Designed user interface models for two websites based on modern principles while abiding by the AODA rules.
                            <br></br>• Created web templates using HTML/CSS, JavaScript on WordPress for the organization for 3+ sites.
                            <br></br>• Constructed a container application for storing and accessing video seminars, notifying for individuals who own
                            the application worldwide.</p1>
                        </div>
                    </div>
                    
                    <div className='container'>
                        <div className="left">
                            <h2 className="work-position">Founder & Lead Developer</h2>
                            <h5 className="work-company">Yatara Designs.</h5>
                            <h5 className="work-date">May 2020 - December 2021</h5>

                        </div>

                        <div className="right">
                            <p1 className="work-desc">• Led the Yatara Designs development and marketing team to create tailored websites and logos for 5+ clients
                            while branding and managing digital presence. 
                            <br></br>• Integrated key SEO techniques to optimize the scores (in SEOBILITY) of each website by at least 25-33%. </p1>
                        </div>
                    </div> 

                    

                    
                    

                </div>

            </div>
        </>
    )
}

export default Works