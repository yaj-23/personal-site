import React, {useEffect, useState} from 'react';
import { Icon} from '@iconify/react';
import wavingHand from '@iconify/icons-emojione/waving-hand';
import './Hero.css';
import {Button} from '../Button.js';
import heroSvg from '../images/hero.svg'
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
                    <h1 className="first_line">greetings  </h1>
                    <Icon className="waveing_hand" icon={wavingHand} style={{fontSize: '50px'}} />
                    <h1 className="first_line">  i'm</h1>
                </div>

                <div className='second_part'>
                    <div className='name_part'>
                        <h1 className='name'>
                            <Typewriter className='typewriter'
                                options={{
                                    strings:["yajurva."],
                                    autoStart: true,
                                    loop :true
                                }}
                            />
                        </h1>
                        <img  className="herosvg-image" alt="yajurva"src={heroSvg} width={width*0.20}/>

                    </div>
                    
                    <h4 className='bullet-points'>• software enthusiast</h4>
                    <h4 className='bullet-points'>• full-stack developer</h4>
                    <h4 className='bullet-points'>• ux/ui designer</h4>
                    <h4 className='bullet-points'>• basketball fanatic</h4>
                    
                    <Link to='contact' duration={800} smooth={true}>
                        <Button buttonColor='primary' buttonSize='btn-medium' buttonStyle='btn-primary'>
                            contact me
                        </Button>
                    </Link>
                  
                </div>
               




                
            </div>            
        </>
    )
}

export default Hero