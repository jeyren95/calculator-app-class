import React from "react";

import "./Header.css";

class Header extends React.Component {
  //When user clicks the toggle button, let the App component know which theme was chosen
  handleToggleButtonClick = () => {
    this.props.selectTheme()

    if (this.props.selectedTheme === "1") {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)"
    } else if (this.props.selectedTheme === "2") {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)"
    } else if (this.props.selectedTheme === "3") {
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)"
    }
  }

  renderToggleButtonPosition() {
    if (this.props.selectedTheme === "1") {
      return "-16%"
    } else if (this.props.selectedTheme === "2") {
      return "30%"
    } else {
      return "84%"
    }
  }

  renderToggleButtonColor() {
    if (this.props.selectedTheme === "1") {
      return "hsl(6, 63%, 50%)"
    } else if (this.props.selectedTheme === "2") {
      return "hsl(25, 98%, 40%)"
    } else {
      return "hsl(176, 100%, 44%)"
    }
  }

  renderToggleBackgroundColor() {
    if (this.props.selectedTheme === "1") {
      return "hsl(223, 31%, 20%)"
    } else if (this.props.selectedTheme === "2") {
      return "hsl(0, 5%, 81%)"
    } else {
      return "hsl(268, 71%, 12%)"
    }
  }

  renderFontColor() {
    if (this.props.selectedTheme === "1") {
      return "white"
    } else if (this.props.selectedTheme === "2") {
      return "hsl(60, 10%, 19%)"
    } else  {
      return "hsl(52, 100%, 62%)"
    }
  }

  render() {
    return (
      <div className="header row">
        <div className="col-7 app-title">
          <h3 style={{color: this.renderFontColor()}}>calc</h3>
        </div>
        <div className="col-5 theme-switcher">
          <div className="row theme-choices">
            <span style={{color: this.renderFontColor()}}>1 2 3</span>
          </div>
          <div className="row">
            <div className="col-7 theme-label">
              <span style={{color: this.renderFontColor()}}>THEME</span>
            </div>
            <div
            style={{backgroundColor: this.renderToggleBackgroundColor()}}
            className="col-5 theme-toggle-button">
              <i
              style={{left: this.renderToggleButtonPosition(), color: this.renderToggleButtonColor()}}
              class="fas fa-circle"
              type="button"
              onClick={this.handleToggleButtonClick}
              >
              </i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
