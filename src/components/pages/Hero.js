import React from 'react';
import './Hero.css';
import {Button} from '../Button.js';
import Typewriter from 'typewriter-effect'; 
import {Link} from 'react-scroll';




function Hero() {




    return (
        <>
            <div className='hero-container' id='home'>


                <div className='first_part'>
                        <h1 className='name'>
                            <Typewriter className='typewriter'
                                options={{
                                    strings:["SWE Intern", "Comp End Student",  ],
                                    autoStart: true,
                                    loop :true
                                }}
                            />
                            
                        </h1>
                        <h2 className='hero-title'>Yajurva Trivedi.</h2>
                </div>
               
                <div className='second_part'>
                    <div className="box">
                        <h4 className="medium-text">CURRENT.</h4>
                        <p1 className="small-text">SDE Intern</p1>
                        <p1 className="small-text">IBM ® </p1>
                    </div>
                    <br></br>
                    <div className="box">
                        <h4 className="medium-text">PREVIOUS.</h4>
                        <p1 className="small-text">Developer Assistant</p1>
                        <p1 className="small-text">EiQ Techonologies Inc</p1>
                    </div>
                </div>
                
                <div className="third_part">
                    <Link to='experience' duration={800} smooth={true}>
                        <Button buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            Work Experience.
                        </Button>
                    </Link>
                    <Link to='project' duration={800} smooth={true}>
                        <Button buttonColor='secondary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            Projects.
                        </Button>
                    </Link>
                    <Link to='contact' duration={800} smooth={true}>
                        <Button buttonColor='tertiary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            Contact.
                        </Button>
                    </Link>
                </div>



                
            </div>            
        </>
    )
}

export default Hero