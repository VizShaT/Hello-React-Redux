import React, { Component } from "react";
import HelloWorld from "../components/HelloWorld";
import { store } from "../store";
import ButtonGroup from "./ButtonGroup";

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "React-Redux", "Elm"]} />
    ];
  }
}

export default App;
