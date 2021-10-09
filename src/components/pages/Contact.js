import React from 'react';
import './Contact.css';
import {Button} from '../Button.js';
import githubdark from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';



function Contact() {
    return (
        <>
            <div className='contact-container' id='contact'>
                <h1 className='header_line'>
                    Contact Me.
                </h1>
                <div className="socials">
                    <a href='mailto: yajurva.trivedi@ryerson.ca'>
                        <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                                email me
                        </Button>
                    </a>
                    <a href='https://github.com/yaj-23'>
                        <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            <img src={githubdark}/>
                        </Button>
                    </a>
                    <a href='https://www.linkedin.com/in/yajurva-trivedi/'>
                        <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            <img src={linkedin}/>
                        </Button>
                    </a>
                    <a href='https://www.instagram.com/tri_yajurva/'>
                        <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            <img src={instagram}/>
                        </Button>
                    </a>
                </div>        
                
            </div>
        </>
    )
}

export default Contact
