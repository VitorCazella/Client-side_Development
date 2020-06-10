import React from 'react';

function Shape(props) {
    return (
        <div className="Shape">
            Hello {props.name}
        </div>
    );
}

export default Shape;