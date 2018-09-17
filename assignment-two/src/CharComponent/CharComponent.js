import React from 'react';

const charComponent = (props) => {
    return (
        <div onClick={props.click}>
            {props.letter}
        </div>
    );
}

export default charComponent;