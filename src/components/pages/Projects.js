import React from 'react';
import './Projects.css';
import githubwhite from '../images/github-white.svg';
import githubdark from '../images/github.svg';
import externallinkwhite from '../images/external-link-white.svg';
import externallinkdark from '../images/external-link.svg';





function Projects() {

    return (
        <>
        
            <div className="projects-container" id='project'>   
                <h1 className="header_line">Featured Projects.</h1>
             
                    <div className='line1'>

                        <div className="project-left">
                            <h1 className="project-name">Vada Medical</h1>
                            <p1  className="project-desc">Utilized Voiceflow for our automated chatbot system which is intergrated with Google Assistant Programs. The data received from the chatbot is stored in an excel file which uses Dropbase to store into a database. This data is fetched using REST API Methods, and utilized to publish on a website/chat area or a physical document of some sort. The website is created using React Js, HTML/CSS</p1>
                            <div className="links">
                                <a href="https://github.com/yaj-23/HackTheNorth2021">
                                    <img alt="yaj" className="project-github" src={githubdark} width={30}/>
                                </a>
                                <a href="https://vada-medical.tech/">
                                    <img alt="yaj" className="project-link" src={externallinkdark} width={30}/>
                                </a>
                            </div>
                           
                        </div>
                     
                        <div className="project-right">
                            <h1 className="project-name-contrast">Zensations</h1>
                            <p1  className="project-desc-contrast">
                                Frond-End comprised of React Ionic. For the backend, we used Express.js with Node.js and TypeScript for a REST API to communicate.
                                The database of choice was none other than Cockroachdb, storing Yoga exercises, image URL's and a seperate table mapping Yoga positions with emotions (Angry, Sad, Happy, etc.) in order to improve the classification of exercises.
                            </p1>
                          
                            <div className="links">
                                <a href="https://github.com/yaj-23/DeltaHacks7">
                                    <img alt="yaj"  className="project-github" src={githubwhite} width={30}/>
                                </a>
                                <a href="https://vada-medical.tech/">
                                    <img alt="yaj" className="project-link" src={externallinkwhite} width={30}/>
                                </a>
                            </div>
                           
                        </div>
                        

                        
                        
                       
                    </div>

                    

                    <div className="line2">
                        <div className="project-right">
                            <h1 className="project-name-contrast">Link</h1>
                            <p1  className="project-desc-contrast">
                            Link allows you to swipe throughout locations in Toronto mimicking a social media platform.
                            This application was built by carefully designing a clean FIGMA design. After creating a design which was most appealing, I converted design into React Native Application.
                            </p1>
                        
                            <div className="links">
                                <a href="https://github.com/yaj-23/RUHacks">
                                    <img alt="yaj" className="project-github" src={githubwhite} width={30}/>
                                </a>
                                <a href="https://devpost.com/software/link-peydzb">
                                    <img alt="yaj" className="project-link" src={externallinkwhite} width={30}/>
                                </a>
                            </div>
                            
                        </div>

                        <div className="project-left">
                                <h1 className="project-name">Greenify</h1>
                                <p1  className="project-desc">The frontend and design for the app was made with Figma. Utilized Expo to help with the back-end and make the ReactNative APP. Google Clouds Firebase to store all of our users. Javascript, as the baseline programming language, Firestore to host the database, and Postman for API testing.</p1>
                                <div className="links">
                                    <a href="https://github.com/yaj-23/TOHacks">
                                        <img alt="yaj" className="project-github" src={githubdark} width={30}/>
                                    </a>
                                    <a href="https://devpost.com/software/greenify-n4pg0b">
                                        <img alt="yaj" className="project-link" src={externallinkdark} width={30}/>
                                    </a>
                                </div>
                            
                        </div>
                    </div>

                    <div className="line3">
                        <div className="project-left">
                                <h1 className="project-name">GPU/ALU Design</h1>
                                <p1  className="project-desc">
                                Using Intel Quartus, designed and tested General Processing Unit based on arithmetic operations by examining waveforms generated from VHDL Files. Unit incorporated the use of Latches, Seven Segment Displays, Decoder (4x16), and designs of Moore Machine.
                                </p1>
                                <div className="links">
                                    <a href="https://github.com/yaj-23/COE328_ALU-GPU_DESIGN">
                                        <img alt="yaj" className="project-github" src={githubdark} width={30}/>
                                    </a>
                                   
                                </div>
                            
                        </div>

                        <div className="project-right">
                            <h1 className="project-name-contrast">Xplor To</h1>
                            <p1  className="project-desc-contrast">
                            Food Discovering application with front-end framework pre-designed in Figma, with Flutter as the Primary Language. The process of completing this application is still progressing, to test/see code please contact me! 
                            </p1>
                        
                            {/* <div className="links">
                                <a href="https://github.com/yaj-23/RUHacks">
                                    <img  className="project-github" src={githubwhite} width={30}/>
                                </a>
                                <a href="https://devpost.com/software/link-peydzb">
                                    <img  className="project-link" src={externallinkwhite} width={30}/>
                                </a>
                            </div> */}
                            
                        </div>
                    </div>
                    

                        
                   
                </div>
                
               
              

            
                
            




        </>
    )
}
export default Projects
