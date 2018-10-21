import React from 'react'

const char = (props) => {
    const inlineBox = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'

    }
    return (
        <div style= {inlineBox} onClick={props.click}>
            {props.letter} 
            
        </div>
    )
}

export default char