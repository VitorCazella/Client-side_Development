import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
<<<<<<< HEAD
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
=======
          <p>{this.state.date.toLocaleTimeString()}.</p>
>>>>>>> 482eb15ed9acc1495e9f64bdeaeab7e38491fc6b
        </div>
      );
    }
  }

<<<<<<< HEAD
  ReactDOM.render(
    <Clock />,
    document.getElementById('main')
  );

=======
>>>>>>> 482eb15ed9acc1495e9f64bdeaeab7e38491fc6b
export default Clock;