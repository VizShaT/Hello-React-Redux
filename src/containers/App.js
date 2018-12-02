import React, { Component } from "react";
import HelloWorld from "../components/HelloWorld";
import { connect } from "react-redux";
import ButtonGroup from "./ButtonGroup";

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={this.props.tech} />,
      <ButtonGroup key={2} technologies={["React", "React-Redux", "Elm"]} />
    ];
  }
}

function mapStateToProps(state) {
  return {
    tech: state.tech
  };
}
export default connect(
  mapStateToProps,
  null
)(App);
