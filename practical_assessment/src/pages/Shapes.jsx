import React from 'react';

const colors = ["#810c71", "#2054fc", "#66aa09", "#a6e697", "#26c4b9", "#7f11bf", "#efac5c"];

class Shapes extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            circleStyle: {
                backgroundColor: colors[Math.floor(Math.random() * 5)],
                height: Math.floor(Math.random() * 245), 
                width: Math.floor(Math.random() * 250), 
                borderRadius: Math.floor(Math.random() * 100)
            }
        };
    } 

    render() {
        return (
            <a style={this.state.circleStyle}></a>
        );
    }
}

export default Shapes;