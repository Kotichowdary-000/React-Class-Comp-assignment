import React, { Component } from "react";
// ❌ removed wrong import (import ColorChange from "../../App")

class ColorChange extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  toggleColor = () => {
    this.setState({
      color: this.state.color === "red" ? "blue" : "red"
    });
  };

  render() {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <button
          style={{
            backgroundColor: this.state.color,
            color: "white",
            padding: "15px 40px",
            fontSize: "20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          onClick={this.toggleColor}
        >
          Toggle Color
        </button>
      </div>
    );
  }
}

export default ColorChange;
