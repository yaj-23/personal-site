import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <>
            <div className="projects-container">
                <h1 className='projects-header'>
                    Projects
                </h1>

                <div className="sec-container">
                    <div className="section-one">
                        <img></img>
                        <h1>Personal React Website</h1>
                        <p1>Using React JS, HTML and CSS, created this completely responsive website.</p1>
                    </div>

                    <div className="section-two">
                        <img></img>
                        <h1>Ryerson Engineering Competition Website</h1>
                        <p1>Using React Js, HTML 5, CSS, created a project showcase website building on REC Competition</p1>
                    </div>
                    <div className="section-three">
                        <img></img>
                        <h1>Xplor TO</h1>
                        <p1></p1>

                    </div>

                </div>

            </div>
        </>      
    )
}

export default Projects
