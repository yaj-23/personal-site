import React from 'react';
import { Cards } from '../Cards';
import './Contact.css';
import {Button} from '../Button.js';
import externallinkwhite from '../images/external-link-white.svg';


function Contact() {
    return (
        <>
            <div className='contact-container' id='contact'>
                <h1 className='header_line'>
                    get in touch with me
                </h1>
                <div className="contact-cards">
                        <Cards className='short-card' cardColor='short-one'>
                            <h2 className='title'>
                                Github 
                                <a href='https://github.com/yaj-23'>
                                    <img className='contact-link'alt='yajurva' src={externallinkwhite}/>
                                </a>
                            </h2>
                        </Cards>
                        <br></br>
                        <Cards className='short-card' cardColor='short-two'>
                            <h2 className='title'>
                                LinkedIn 
                                <a href='https://www.linkedin.com/in/yajurva-trivedi/'>
                                    <img className='contact-link'alt='yajurva' src={externallinkwhite}/>
                                </a>
                            </h2>
                        </Cards>
                        <br></br>

                        <Cards className='short-card' cardColor='short-three'>
                            <h2 className='title'>
                                Instagram 
                                <a href='https://www.instagram.com/tri_yajurva/'>
                                    <img className='contact-link'alt='yajurva' src={externallinkwhite}/>
                                </a>
                            </h2>
                        </Cards>
                        <br></br>

                        <Cards className='short-card' cardColor='short-four'>
                            <h2 className='title'>
                                Facebook 
                                <a href='https://www.facebook.com/yajurva.trivedi.5/'>
                                    <img className='contact-link'alt='yajurva' src={externallinkwhite}/>
                                </a>
                            </h2>
                        </Cards>
                    
                </div>

                <a href='mailto: yajurva.trivedi@ryerson.ca'>
                    <Button className='contact-btn'buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            email me
                    </Button>
                </a>
                <br></br>
                <br></br>
            </div>
        </>
    )
}

export default Contact
