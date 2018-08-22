import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "Sam", age: 30, belt: "black", id: 1 },
      { name: "Boy", age: 20, belt: "green", id: 2 },
      { name: "Rabbani", age: 25, belt: "pink", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1> My First React app!</h1>
        <p> Welcome :)</p>
        <Ninjas ninjas={this.props.ninjas} />
      </div>
    );
  }
}

export default App;
