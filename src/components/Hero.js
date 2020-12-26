import React from 'react';
import'./Hero.css';

 
function Hero(){
  return(
    <div className ='hero-container'>

      <h1>
          <div className="greeting-hello">
            Greetings
          </div>

          <div className="name-yajurva">
            I'm Yajurva Trivedi
          </div>
      </h1>
      
      <div>
        <img src="illustration.png"  className="hero-image"></img>
      
      </div>
    </div> 
  )
}

export default Hero;