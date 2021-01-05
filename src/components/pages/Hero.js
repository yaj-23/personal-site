import React from 'react';
import './Hero.css';
import {Button} from '../Button.js';

function Hero() {
    return (
        <>
            <div className='hero-container'>
                <h1 className="greetings">Greetings</h1>
                <p className="name">I'm Yajurva Trivedi</p>
                
                <div className='buttons'>
                    <div className='button-one'>                
                        <Button buttonStyle='btn-primary' buttonColor='primary' buttonSize='btn-medium'>
                            About Me
                        </Button>
                    </div>

                    <div className='button-two'>                
                        <Button buttonStyle='btn-primary' buttonColor='secondary' buttonSize='btn-medium'>
                            Projects
                        </Button>
                    </div>

                    <div className='button-three'>                
                        <Button buttonStyle='btn-primary' buttonColor='third' buttonSize='btn-medium'>
                            Contact Me
                        </Button>
                    </div>
                </div>
                
            </div>            
        </>
    )
}

export default Hero
