import React from 'react';
import './Contact.css';
import {Button} from '../Button.js';
import githubdark from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';
import email from '../images/email.svg';



function Contact() {
    return (
        <>
            <div className='contact-container' id='contact'>
                <h1 className='header_line'>
                    Contact Me.
                </h1>
                <div className="socials">
                    <a href='mailto: yajurva.trivedi@ryerson.ca' target="_blank"  rel="noreferrer">
                        <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            <img alt="yaj"src={email}/>

                        </Button>
                    </a>
                    <a href='https://github.com/yaj-23' target="_blank"  rel="noreferrer">
                        <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            <img alt="yaj"src={githubdark}/>
                        </Button>
                    </a>
                    <a href='https://www.linkedin.com/in/yajurva-trivedi/' target="_blank"  rel="noreferrer">
                        <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            <img alt="yaj" src={linkedin}/>
                        </Button>
                    </a>
                    <a href='https://www.instagram.com/tri_yajurva/' target="_blank"  rel="noreferrer">
                        <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            <img alt="yaj" src={instagram}/>
                        </Button>
                    </a>
                </div>        
                
            </div>
        </>
    )
}

export default Contact
