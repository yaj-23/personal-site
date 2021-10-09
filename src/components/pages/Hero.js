import React, {useEffect, useState} from 'react';
import './Hero.css';
import {Button} from '../Button.js';
import Typewriter from 'typewriter-effect'; 
import {Link} from 'react-scroll';



function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
function Hero() {

    const {width } = useWindowDimensions();



    return (
        <>
            <div className='hero-container' id='home'>


                <div className='first_part'>
                        <h1 className='name'>
                            <Typewriter className='typewriter'
                                options={{
                                    strings:["Yajurva Trivedi." ],
                                    autoStart: true,
                                    loop :true
                                }}
                            />
                            
                        </h1>
                        <h2 className='hero-title'>Software Engineer.</h2>
                </div>
               
                <div className='second_part'>
                    <div className="box">
                        <h4 className="medium-text">CURRENT.</h4>
                        <p1 className="small-text">Project Manager | CEN100</p1>
                        <p1 className="small-text">Faculty of Engineering & Architectural Science | Ryerson U </p1>
                    </div>
                    <br></br>
                    <div className="box">
                        <h4 className="medium-text">PREVIOUS.</h4>
                        <p1 className="small-text">Front-End Developer</p1>
                        <p1 className="small-text">Crossroads Free Methodist Church</p1>
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