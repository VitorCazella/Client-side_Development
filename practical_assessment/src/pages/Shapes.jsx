import React from 'react';
import App from '../App';

const colors = ["#810c71", "#2054fc", "#66aa09", "#a6e697", "#26c4b9", "#7f11bf", "#efac5c"];

class Shapes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ShapesStyle: {
                backgroundColor: colors[Math.floor(Math.random() * 5)],
                height: Math.floor(Math.random() * 245),
                width: Math.floor(Math.random() * 250),
                borderRadius: Math.floor(Math.random() * 100)
            }
        };
    }

    componentDidMount() { this.timerID = setInterval(() => this.repeatTask(), 1000); }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    repeatTask() {
        const randomNumber = Math.floor(Math.random() * 7);
        let randomColor = colors[randomNumber];
        const randomHeight = Math.floor(Math.random() * 200);
        const randomWidth = Math.floor(Math.random() * 200);
        const randomBorderRadius = Math.floor(Math.random() * 100);
        this.setState({
            ShapesStyle: {
                backgroundColor: randomColor,
                height: randomHeight,
                width: randomWidth,
                borderRadius: randomBorderRadius
            }
        });

    }

    render() {
        return (
            <a style={this.state.ShapesStyle}>aaaa</a>
        );
    }
}

function ShapesList() {
    return (
        <ul>
            <li key="1">
                <Shapes />
            </li>
            <li key="2">
                <Shapes />
            </li>
            <li key="3">
                <Shapes />
            </li>
            <li key="4">
                <Shapes />
            </li>
            <li key="5">
                <Shapes />
            </li>
            <li key="6">
                <Shapes />
            </li>
            <li key="7">
                <Shapes />
            </li>
            <li key="8">
                <Shapes />
            </li>
            <li key="9">
                <Shapes />
            </li>
            <li key="10">
                <Shapes />
            </li>
            <li key="11">
                <Shapes />
            </li>
            <li key="12">
                <Shapes />
            </li>
        </ul>
    );
}

export default Shapes;