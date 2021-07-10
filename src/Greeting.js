import React from "react";

export class Greeting extends React.Component {
  render() {
    console.log("this.props.children==> ", this.props.children);

    return <div>Hello, {this.props.name}</div>;
  }
}
