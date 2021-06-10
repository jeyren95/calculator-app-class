import React from "react";

import "./SmallButton.css";

class SmallButton extends React.Component {
  //When user clicks the button, let the App component know which button was clicked
  //First scenario - A number was clicked
      //Get the App component to call inputSelectedNumber
  //Second scenario - Calculator function was clicked
      //Get the App component to call selectFunction
  //Third scenario - Point button was clicked
      //Get the App component to call handlePointClick
  //Fourth scenario - Delete button was clicked
      //Get the App component to call handleDeleteClick
  handleClick = () => {
    if (this.props.name === "DEL") {
      this.props.handleDeleteClick()
    } else if (this.props.name === ".") {
      this.props.handlePointClick()
    } else if (this.props.name === "+" || this.props.name === "-" || this.props.name === "x" || this.props.name === "/") {
      this.props.selectFunction(this.props.name)
    } else {
      this.props.inputSelectedNumber(this.props.name)
    }
  }

  renderBackgroundColor() {
    if (this.props.name === "DEL") {
      if (this.props.selectedTheme === "1") {
        return "hsl(225, 21%, 49%)"
      } else if (this.props.selectedTheme === "2") {
        return "hsl(185, 42%, 37%)"
      } else {
        return "hsl(281, 89%, 26%)"
      }
    } else {
      if (this.props.selectedTheme === "1") {
        return "hsl(30, 25%, 89%)"
      } else if (this.props.selectedTheme === "2") {
        return "hsl(45, 7%, 89%)"
      } else {
        return "hsl(268, 47%, 21%)"
      }
    }
  }


  renderFontColor() {
    if (this.props.name === "DEL") {
      return "white"
    } else {
      if (this.props.selectedTheme === "1") {
        return "hsl(221, 14%, 31%)"
      } else if (this.props.selectedTheme === "2") {
        return "hsl(60, 10%, 19%)"
      } else {
        return "hsl(52, 100%, 62%)"
      }
    }
  }

  render() {
    return (
      <div
      className="small-button col-3"
      type="button"
      onClick={this.handleClick}
      style={{
        backgroundColor: this.renderBackgroundColor(),
        padding: this.props.name === "DEL" ? "3.7% 0" : "2% 0 0 0"
      }}
      >
        <span
          style={{
          color: this.renderFontColor(),
          fontSize: this.props.name === "DEL" ? "17px" : "30px"
          }}
        >
          {this.props.name}
        </span>
      </div>
    )
  }
}

export default SmallButton;
