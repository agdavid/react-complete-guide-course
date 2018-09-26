import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);

        this.inputElement = React.createRef();

    }

    componentDidMount () {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        return (
            <div onClick={this.props.click} className="Person">
                <p>I'm {this.props.name} and {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                type="text"
                ref={this.inputElement}
                onChange={this.props.changed} 
                value={this.props.name} />
            </div>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func, 
    name: PropTypes.string, 
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
