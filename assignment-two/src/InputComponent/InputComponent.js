import React from 'react';

const inputComponent = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.currentInput}/>
            <p>Current Length: {props.currentLength}</p>
        </div>
    );
}

export default inputComponent;