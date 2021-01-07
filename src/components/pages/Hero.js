import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import './Hero.css';
import {Button} from '../Button.js';
import lottie from 'lottie-web';

function Hero() {

    const anim = useRef(null)

    useEffect(() =>{
        lottie.loadAnimation({
            container : anim.current,
            renderer:'svg',
            loop: true,
            autoplay: true,
            animationData: require('../lottiefiles/computer.json')
        })
    }, [] )


    return (
        <>
            <div className='hero-container'>
                <h1 className="greetings">Greetings</h1>
                <p className="name">I'm Yajurva Trivedi</p>
                
                <div className='buttons'>
                    <Link to='#about' className='button-one'>                
                        <Button buttonStyle='btn-primary' buttonColor='primary' buttonSize='btn-medium'>
                            About Me
                        </Button>
                    </Link>

                    <Link to='/'  className='button-two'>                
                        <Button buttonStyle='btn-primary' buttonColor='secondary' buttonSize='btn-medium'>
                            Projects
                        </Button>
                    </Link>

                    <Link to='/'  className='button-three'>           
                        <Button buttonStyle='btn-primary' buttonColor='third' buttonSize='btn-medium'>
                            Contact Me
                        </Button>
                    </Link>
                    
                    <div className="anim" ref={anim}></div>

                </div>

                
            </div>            
        </>
    )
}

export default Hero
