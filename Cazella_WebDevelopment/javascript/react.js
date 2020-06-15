import React from "react"
import ReactDOM from "react-dom"

(function() {
  "use strict";

  class Element extends React.Component {
    render() {
      return <h1>Hello, world!</h1>;
    }
  }
})

ReactDOM.render(
  <Element />,
  document.getElementById('root')
);
