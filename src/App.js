import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Form from "./components/Form";
import Framework from "./components/Framework";

class App extends Component {
  state = {
    value: undefined,
    name: undefined,
    tech: undefined,
    isFramework: undefined,
    error: undefined
  };
  getData = async e => {
    e.preventDefault();
    const choice = e.target.value;

    const api_call = await fetch(`http://api.myjson.com/bins/${choice}`);
    const data = await api_call.json();
    this.setState({
      value: choice,
      name: data.name,
      tech: data.tech,
      isFramework: data.framework
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Please select a number</h2>
        <Form getData={this.getData} />
        <Framework
          value={this.state.value}
          name={this.state.name}
          tech={this.state.tech}
          isFramework={this.state.isFramework}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
