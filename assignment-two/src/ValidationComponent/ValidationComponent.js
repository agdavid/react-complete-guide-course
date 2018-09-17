import React from 'react';

const validationComponent = (props) => {
    let validationText = null;

    if (props.currentLength) {
        if (props.currentLength < 5) {
            validationText = "Text too short";
        } else {
            validationText = "Text long enough";
        }
    }

    return (
        <div>
            {validationText}
        </div>
    );
}

export default validationComponent;