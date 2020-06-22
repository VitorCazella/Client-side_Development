import React from 'react';

const color = ["#ff6600", "#66ff66", "#0000ff", "#ff00ff", "#ff0000", "#8f8f8f", "#00ffff"];

class Shape extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shapeStyle: {
                backgroundColor: color[getRandomInt(0, 7)],
                height: getRandomInt(50, 200),
                width: getRandomInt(50, 200),
                borderRadius: getRandomInt(0, 100)
            }
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.repeatTask(), 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    repeatTask() {
        let randomColor = color[getRandomInt(0, 7)];
        const randomHeight = getRandomInt(50, 200);
        const randomWidth = getRandomInt(50, 200);
        const randomBorderRadius = getRandomInt(0, 100);

        this.setState({
            shapeStyle: {
                backgroundColor: randomColor,
                height: randomHeight,
                width: randomWidth,
                borderRadius: randomBorderRadius
            }
        });
    }

    render() {
        return (
            <div className="Shape" style={this.state.shapeStyle}></div>
        );
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export default Shape