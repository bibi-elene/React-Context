import React, { Component } from "react";
import MyContext from "./MyContext";

class ChildApp extends Component {
  static contextType = MyContext;

  render() {
    const { toggle, count, toggleState, increment } = this.context;
    return (
      <div>
        <h2>ChildApp</h2>
        <div>Count: {count}</div>
        <div>Toggle: {`${toggleState}`}</div>
        <button onClick={toggle}>Toggle</button>
        <button onClick={increment}>Child Increment</button>
      </div>
    );
  }
}

export default ChildApp;
