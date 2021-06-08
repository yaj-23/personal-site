import React from 'react';
import './Works.css';
import {Cards} from '../Cards';


function Works(){

    return(
        <>
            <div className='works-container' id='work'>
                <h1 className='header_line'>places i've worked at</h1>
                <div className='works-cards'>
                    <Cards className='card' cardStyle='standard'>
                        <h3 className='company'> Yatara Designs. </h3>
                        <h5 className='position'>Founder</h5>
                        <h5 className='position'>Lead Developer</h5>
                        <h5 className='position'>2020 - Present</h5>
                    </Cards>
                    <br></br>

                    <Cards className='card' cardColor='standard-two'>
                        <h3 className='company'>Cash & Cell Mart.</h3>
                        <h5 className='position'>Entry Associate</h5>
                        <h5 className='position'>Web Developer</h5>
                        <h5 className='position'>2020</h5>
                    </Cards>
                    <br></br>
                    <Cards className='card' cardColor='standard-three'>
                        <h3 className='company'> Tetra Ryerson. </h3>
                        <h5 className='position'>Web Developer</h5>
                        <h5 className='position'>Executive Member</h5>
                        <h5 className='position'>2021 - Present</h5>
                    </Cards>
                    <br></br>

                    <Cards className='card' cardColor='standard-four'>
                        <h3 className='company'>R.E.C.E.S.S</h3>
                        <h5 className='position'>Vice President of Operations</h5>
                        <h5 className='position'>2021-Present</h5>
                    </Cards>
                </div>

            </div>
        </>
    )
}

export default Works