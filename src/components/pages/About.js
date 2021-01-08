import React, {useEffect, useRef}from 'react';
import {Link} from 'react-scroll';
import './About.css';
import lottie from 'lottie-web';
import {Button} from '../Button.js';





function About() {

    const animone = useRef(null)


    useEffect(() =>{
        lottie.loadAnimation({
            container : animone.current,
            renderer:'svg',
            loop: true,
            autoplay: true,
            animationData: require('../lottiefiles/about.json')
        })
    }, [] )

    return (
        <>
            <div className="about-container" id='about'>
                <h1 className='header'>
                    About Me
                </h1>
                <div className='cont'>
                    <p1 className="para-first">I am an upcoming software enthusiast based in Toronto, Canada. 
                        I am currently in my second year in Computer Engineering at
                        Ryerson University located in the heart of downtown Toronto.I'm a huge basketball fanatic,
                        I enjoy competing in fantasy leagues with friends. Few things about me everyone should know
                        I'm a sucker for modern and sleek design, and I love learning new ways to test and apply knowledge.
                    </p1>

                    
                </div>  

                <div className='buttons'>
                    <Link to='contact'  className='button-about' duration={100} smooth={true}>           
                        <Button buttonStyle='btn-primary' buttonColor='about' buttonSize='btn-medium'>
                            Contact Me
                        </Button>
                    </Link>

                    <div className="animone" ref={animone}></div>
                </div>
                
            
            </div>



        </>
    )
}
export default About
