'use strict';

const e = React.createElement;

class Shape extends React.Component {
  constructor(props) {
    super(props);
    var divStyle = {
      style: {
        backgroundColor: "blue",
        height: Math.floor(Math.random() * 245), width: Math.floor(Math.random() * 250),
        borderRadius: Math.floor(Math.random() * 100)
      }
    }
  }

  render() {
    return (
      'div',
      { style},//{ onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

ReactDOM.render(
  e(Shape),
  document.getElementById('root')
);