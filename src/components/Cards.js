import React from 'react';
import './Cards.css';
import githubdark from './images/github.svg';
import externallinkdark from './images/external-link.svg';

// const Numbers = [1,2,3,4]

export const Card = ({
    children,
    type,
    onClick,
    projectName,
    projectDesc,
    gitLink,
    webLink,
    number
}) => {
    // const checkNum = Numbers.includes ={number} ? number : Numbers[0]

    return(
        <div className="cardContainer" onClick={onClick} type={type}>
            <h1 className="ProjName">{projectName}</h1>
            <p1 className="ProjDesc">{projectDesc}</p1>
            <div className="links">
                 <a href={gitLink}>
                    <img alt="yaj" className="project-github" src={githubdark} width={30}/>
                </a>
                <a href={webLink}>
                    <img alt="yaj" className="project-link" src={externallinkdark} width={30}/>
                </a>
            </div>
        {children}
        </div>
    )
}