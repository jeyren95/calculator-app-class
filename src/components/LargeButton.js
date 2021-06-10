import React from "react";

import "./LargeButton.css";

class LargeButton extends React.Component {

  handleClick = () => {
    if (this.props.name ==="RESET") {
      this.props.handleResetClick()
    } else {
      this.props.handleEqualsClick()
    }
  }


  renderBackgroundColor() {
    if (this.props.name === "RESET") {
      if (this.props.selectedTheme === "1") {
        return "hsl(225, 21%, 49%)"
      } else if (this.props.selectedTheme === "2") {
        return "hsl(185, 42%, 37%)"
      } else {
        return "hsl(281, 89%, 26%)"
      }
    } else {
      if (this.props.selectedTheme === "1") {
        return "hsl(6, 63%, 50%)"
      } else if (this.props.selectedTheme === "2") {
        return "hsl(25, 98%, 40%)"
      } else {
        return "hsl(176, 100%, 44%)"
      }
    }
  }

  renderFontColor() {
    if (this.props.name === "RESET") {
      return "white"
    } else {
      if (this.props.selectedTheme === "1" || this.props.selectedTheme === "2") {
        return "white"
      } else {
        return "hsl(198, 20%, 13%)"
      }
    }
  }


  render() {
    return (
      <div
      style={{backgroundColor: this.renderBackgroundColor()}}
      className="large-button col-6"
      onClick={this.handleClick}
      type="button"
      >
        <span style={{color: this.renderFontColor()}}>{this.props.name}</span>
      </div>
    )
  }
}

export default LargeButton;
