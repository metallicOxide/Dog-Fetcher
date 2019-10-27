import React, { Component } from "react";
import "./App.css";
// import SelectDog from "./selectDog";
import Dog from "./dog";

class App extends Component {
  render() {
    // you can give Dog tag arguments like this, they are key value pairs
    // you can access reet's value using prop.reet
    return (
      <div>
        <Dog />
        {/* <SelectDog /> */}
      </div>
    );
  }
}

export default App;
