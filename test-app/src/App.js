import "./App.css";
import React, { Component } from "react";
import ChildApp from "./ChildApp";
import MyContext from "./MyContext";

class App extends Component {
  state = {
    count: 0,
    data: [],
    toggleState: true,
  };

  componentDidMount() {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((items) => this.setState({ data: items }));
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  toggle = () => {
    this.setState((prevState) => ({ toggleState: !prevState.toggleState }));
  };

  render() {
    const contextValues = {
      count: this.state.count,
      toggleState: this.state.toggleState,
      data: this.state.data,
      toggle: this.toggle,
      increment: this.increment,
    };

    return (
      <MyContext.Provider value={contextValues}>
        <div>
          <h1>{this.state.count}</h1>
          <p>{`${this.state.toggleState}`}</p>
          <button onClick={this.increment}>INCREMENT</button>
          <button onClick={this.toggle}> TOGGLE </button>
          <ChildApp />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
