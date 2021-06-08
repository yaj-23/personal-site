import React from 'react';
import './Projects.css';
import {Cards} from '../Cards';
import githubwhite from '../images/github-white.svg';
import githubdark from '../images/github.svg';
import externallinkwhite from '../images/external-link-white.svg';
import externallinkdark from '../images/external-link.svg';





function Projects() {


    


    return (
        <>
        
            <div className="projects-container" id='project'>   
                <h1 className="header_line">view some of my projects</h1>
                <div className='projects-cards'>
                    <Cards className='card' cardColor='one' >
                            <h3 className='card-header'>Yatara Designs.</h3>
                            <h2 className='card-desc'>website</h2>
                            <div className='card-stacks'> 
                                <p1 className='stacks'>ReactJs</p1>
                                <p1 className='stacks'>HTML/CSS</p1>
                                <p1 className='stacks'>Figma</p1>
                            </div>
                            <div className='links'>
                                <a href='https://github.com/yaj-23/YataraSite'>
                                    <img className='link' alt='yajurva'src={githubwhite}/>
                                </a>
                                <a href='https://yataradesigns.com/'>
                                    <img className='link'alt='yajurva' src={externallinkwhite}/>
                                </a>

                            </div>
                    </Cards>
                    <br></br>
                    <Cards className='card' cardColor='two' >
                            <h3 className='card-header'>Portfolio Site.</h3>
                            <h2 className='card-desc'>website</h2>
                            <div className='card-stacks'> 
                                <p1 className='stacks'>ReactJs</p1>
                                <p1 className='stacks'>HTML/CSS</p1>
                                <p1 className='stacks'>Figma</p1>
                            </div>
                            <div className='links'>
                                <a href='https://github.com/yaj-23/personal-site'>
                                    <img className='link'alt='yajurva' src={githubwhite}/>
                                </a>
                                <a href='https://yajurvatrivedi.me/'>
                                    <img className='link'alt='yajurva' src={externallinkwhite}/>
                                </a>

                            </div>
                    </Cards>
                    <br></br>
                    <Cards className='card' cardColor='three' >
                            <h3 className='card-header'>Vada Medical.</h3>
                            <h2 className='card-desc-dark'>website</h2>
                            <div className='card-stacks'> 
                                <p1 className='stacks-dark'>ReactJs</p1>
                                <p1 className='stacks-dark'>HTML/CSS</p1>
                                <p1 className='stacks-dark'>VonageApi</p1>
                            </div>
                            <div className='links'>
                                <a href='https://github.com/yaj-23/HackTheNorth2021'>
                                    <img className='link'alt='yajurva' src={githubdark}/>
                                </a>
                                <a href='https://vada-medical.tech/'>
                                    <img className='link' alt='yajurva'src={externallinkdark}/>
                                </a>

                            </div>
                    </Cards>
                    <br></br>
                    <Cards className='card' cardColor='four' >
                            <h3 className='card-header'>Zen-Sations.</h3>
                            <h2 className='card-desc-dark'>mobile</h2>
                            <div className='card-stacks'> 
                                <p1 className='stacks-dark'>ReactIonic</p1>
                                <p1 className='stacks-dark'>TypeScript</p1>
                                <p1 className='stacks-dark'>NodeJs</p1>
                            </div>
                            <div className='links'>
                                <a href='https://github.com/yaj-23/DeltaHacks7'>
                                    <img className='link' alt='yajurva'src={githubdark}/>
                                </a>
                                <a href='https://devpost.com/software/zensations'>
                                    <img className='link' alt='yajurva'src={externallinkdark}/>
                                </a>

                            </div>
                    </Cards>
                </div>
                
                <div className='projects-cards'>
                <Cards className='card' cardColor='five' >
                        <h3 className='card-header'>Link App Mobile.</h3>
                        <h2 className='card-desc-dark'>mobile</h2>
                        <div className='card-stacks'> 
                            <p1 className='stacks-dark'>ReactNative</p1>
                            <p1 className='stacks-dark'>Figma</p1>
                            <p1 className='stacks-dark'>ExpoCLI</p1>
                        </div>
                        <div className='links'>
                                <a href='https://github.com/yaj-23/RUHacks'>
                                    <img className='link'alt='yajurva' src={githubdark}/>
                                </a>
                                <a href='https://devpost.com/software/link-peydzb'>
                                    <img className='link'alt='yajurva' src={externallinkdark}/>
                                </a>

                            </div>
                </Cards>
                <br></br>
                <Cards className='card' cardColor='six' >
                        <h3 className='card-header'>Greenify  Mobile.</h3>
                        <h2 className='card-desc'>mobile</h2>
                        <div className='card-stacks'> 
                            <p1 className='stacks'>ReactNative</p1>
                            <p1 className='stacks'>Figma</p1>
                            <p1 className='stacks'>ExpoCLI</p1>
                        </div>
                        <div className='links'>
                                <a href='https://github.com/yaj-23/TOHacks'>
                                    <img className='link' alt='yajurva'src={githubwhite}/>
                                </a>
                                <a href='https://devpost.com/software/greenify-n4pg0b'>
                                    <img className='link'alt='yajurva' src={externallinkwhite}/>
                                </a>

                            </div>
                </Cards>
                <br></br>
                <Cards className='card' cardColor='seven' >
                        <h3 className='card-header'>XplorTo  Mobile.</h3>
                        <h2 className='card-desc'>mobile</h2>
                        <div className='card-stacks'> 
                            <p1 className='stacks'>Java</p1>
                            <p1 className='stacks'>Android Studio</p1>
                        </div>
                        <div className='links'>
                                <a href='https://github.com/yaj-23/XplorToronto'>
                                    <img className='link'alt='yajurva' src={githubwhite}/>
                                </a>
                               

                            </div>
                </Cards>
                <br></br>
                <Cards className='card' cardColor='eight' >
                        <h3 className='card-header'>GPU/ALU Design.</h3>
                        <h2 className='card-desc-dark-outlier'>hardware</h2>
                        <div className='card-stacks'> 
                            <p1 className='stacks-dark'>VHDL</p1>
                            <p1 className='stacks-dark'>Quartus</p1>
                        </div>
                        <div className='links'>
                                <a href='https://github.com/yaj-23/COE328_ALU-GPU_DESIGN'>
                                    <img className='link'alt='yajurva' src={githubdark}/>
                                </a>
                                

                        </div>
                </Cards>
            </div>

            
                
            
            </div>



        </>
    )
}
export default Projects
