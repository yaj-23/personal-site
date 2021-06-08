import React from 'react';
import './Cards.css'

const STYLES =['standard', 'contrast']
const SIZES=['normal' , 'smaller']
const COLOR =['one', 'two', 'three', 'four', 'five','six','seven','eight']

export const Cards = ({
    children,
    type,
    cardStyle,
    cardSize,
    cardColor

}) =>{
    const checkCardStyle =STYLES.includes = {cardStyle} ? cardStyle : STYLES[0]
    const checkCardSize =SIZES.includes = {cardSize} ? cardSize : SIZES[0]
    const checkCardColor =COLOR.includes = {cardColor} ? cardColor : COLOR[0]

    return(
        <div className={`card ${checkCardStyle} ${checkCardSize} ${checkCardColor}`}>
            <h1>
                {children} 
            </h1>

        </div>
    )
}