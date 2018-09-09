import React from 'react';

const userInput = (props) => {
    const style = {
        border: '1px solid blue'
    }

    return (
        <input style={style} type="text" onChange={props.changed} value={props.userName}/>
    )
}

export default userInput;
