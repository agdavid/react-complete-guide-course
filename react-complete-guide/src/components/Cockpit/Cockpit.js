import React from 'react';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
        <Aux>
            <h1>Hi, I'm the simple app for {props.appTitle}</h1>
            <button style={style}
            onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>
        
    );
};

export default cockpit;