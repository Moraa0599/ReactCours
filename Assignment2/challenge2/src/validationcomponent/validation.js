import React from 'react'

const validation = (props) => {
    const length = props.ParagraphLength;

    if (length < 5) {
        return <p> Text too short </p>;
    }

    return <p> Text too Long</p>;

}


export default validation;