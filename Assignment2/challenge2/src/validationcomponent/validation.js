import React from 'react'

const validation = (props) => {
    return (
        <div>
            <p> 
            {props.paragraphlength < 5 ? "This is too short" : 'this is too long' }
            </p>
        </div>
       
    );

}


export default validation;