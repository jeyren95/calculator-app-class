import React from "react";

import "./Display.css";

class Display extends React.Component {

  renderBackgroundColor() {
    if (this.props.selectedTheme === "1") {
      return "hsl(224, 36%, 15%)"
    } else if (this.props.selectedTheme === "2") {
      return "hsl(0, 0%, 93%)"
    } else {
      return "hsl(268, 71%, 12%)"
    }
  }

  renderFontColor() {
    if (this.props.selectedTheme === "1") {
      return "white"
    } else if (this.props.selectedTheme === "2") {
      return "hsl(60, 10%, 19%)"
    } else {
      return "hsl(52, 100%, 62%)"
    }
  }

  render() {
    return (
      <div style={{backgroundColor: this.renderBackgroundColor()}} className="display">
        <span style={{color: this.renderFontColor()}}>{this.props.display}</span>
      </div>
    )
  }

}

export default Display;
