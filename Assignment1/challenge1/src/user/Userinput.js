import React from 'react'

const userinput = (props) => {
    return (
         <div>
             <input type="text" onChange ={props.changeState } value={props.oldName}/>
        </div>

    );
}


export default userinput;