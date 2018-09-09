import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <div>The userName prop for this component is {props.userName}</div>
            <p>Paragraph One</p>
            <p>Paragraph Two</p>
        </div>
    )
}

export default userOutput;