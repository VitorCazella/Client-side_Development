'use strict';

const e = React.createElement;

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            'div',
            null,//{ onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

ReactDOM.render(
    e(MouseTracker),
    document.getElementById('root')
);

