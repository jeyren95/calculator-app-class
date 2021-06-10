import React from "react";

import Header from "./Header";
import Display from "./Display";
import SmallButton from "./SmallButton";
import LargeButton from "./LargeButton";

import "./App.css";

const smallButtons = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x"]
const largeButtons = ["RESET", "="]

class App extends React.Component {
  state = {
    firstNumber: "",
    selectedFunction: "",
    secondNumber: "",
    storedCalculationResult: "",
    display: "0",
    selectedTheme: "1"
  }

  renderSmallButtons() {
    return smallButtons.map((button) => {
      return <SmallButton
              key={button}
              name={button}
              selectedTheme={this.state.selectedTheme}
              inputSelectedNumber={this.inputSelectedNumber}
              selectFunction={this.selectFunction}
              handleDeleteClick={this.handleDeleteClick}
              handlePointClick={this.handlePointClick}
              />
    })
  }

  renderLargeButtons() {
    return largeButtons.map((button) => {
      return <LargeButton
              key={button}
              name={button}
              selectedTheme={this.state.selectedTheme}
              handleEqualsClick={this.handleEqualsClick}
              handleResetClick={this.handleResetClick}
              />
    })
  }


  //When user clicks a number
  //First scenario - when the user has not clicked the calculator function yet and there is no stored calculation result
      //Concatenate the clicked number to the first number
  //Second scenario - when the user has not clicked the calculation function yet and there is already a stored calculation result
      //Concatenate the clicked number to the first number
      //Remove the stored calculation result to signify that a whole new calculation has started
  //Third scenario - when the user clicked the calculator function already, meaning that the user wants to input the second number
      //Concatenate the clicked number to the second number
  inputSelectedNumber = (selectedNumber) => {
    if (this.state.selectedFunction === "" && this.state.calculationResult === "") {
      if (this.state.firstNumber.length < 10) {
        let concatenatedNumber = this.state.firstNumber + selectedNumber
        this.setState({firstNumber: concatenatedNumber, display: concatenatedNumber})
        console.log(`First number: ${concatenatedNumber}`)
      }
    } else if (this.state.selectedFunction === "" && this.state.calculationResult !== "") {
      if (this.state.firstNumber.length < 10) {
        let concatenatedNumber = this.state.firstNumber + selectedNumber
        this.setState({firstNumber: concatenatedNumber, storedCalculationResult: "", display: concatenatedNumber})
        console.log(`First number: ${concatenatedNumber}`)
      }
    } else {
      if (this.state.secondNumber.length < 10) {
        let concatenatedNumber = this.state.secondNumber + selectedNumber
        this.setState({secondNumber: concatenatedNumber, display: concatenatedNumber})
        console.log(`Second number: ${concatenatedNumber}`)
      }
    }
  }


  //When the user clicks either "+", "-", "x" or "/"
  //First scenario - if it is a fresh calculation, meaning that the user is not continuing the calculation from a stored result
      //Just set the state of the selected function to the function that was clicked
  //Second scenario - if the user is conntinuing the calculation from a stored result
      //Set the first number to the stored result
      //Remove the stored result
      //Set the selected function to the clicked function
  selectFunction = (clickedFunction) => {
    if (this.state.storedCalculationResult !== "") {
      this.setState({firstNumber: this.state.storedCalculationResult, storedCalculationResult: "", selectedFunction: clickedFunction})
    } else {
      this.setState({selectedFunction: clickedFunction})
    }
    console.log(`${clickedFunction} was clicked`)
  }


  //When the equals sign is clicked, if both firstNumber and secondNumber states are not "", proceed with the calculation
  //Store the calculation result to allow the user the option of using the result to do further calculation
  //Set the first number and second number back to ""
  handleEqualsClick = () => {
    if (this.state.firstNumber !== "" && this.state.secondNumber !== "") {
      if (this.state.selectedFunction === "+") {
        let result = (parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber)).toString()
        result = result.slice(0, 10)
        this.setState({firstNumber: "", secondNumber: "", selectedFunction: "", storedCalculationResult: result, display: result})
        console.log(`Result: ${result}`)
      } else if (this.state.selectedFunction === "-") {
        let result = (parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber)).toString()
        result = result.slice(0, 10)
        this.setState({firstNumber: "", secondNumber: "", selectedFunction: "", storedCalculationResult: result, display: result})
        console.log(`Result: ${result}`)
      } else if (this.state.selectedFunction === "x") {
        let result = (parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber)).toString()
        result = result.slice(0, 10)
        this.setState({firstNumber: "", secondNumber: "", selectedFunction: "", storedCalculationResult: result, display: result})
        console.log(`Result: ${result}`)
      } else if (this.state.selectedFunction === "/") {
        let result = (parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber)).toString()
        result = result.slice(0, 10)
        this.setState({firstNumber: "", secondNumber: "", selectedFunction: "", storedCalculationResult: result, display: result})
        console.log(`Result: ${result}`)
      }

    }
  }

  //When reset button is clicked, bring everything back to its original state
  handleResetClick = () => {
    this.setState({
      firstNumber: "",
      selectedFunction: "",
      secondNumber: "",
      storedCalculationResult: "",
      display: "0"
    })
  }

  //When delete button is clicked
  //First scenario - when user has not clicked the calculator function yet and is in the midst of inputting the first number
      //If the length of the first number is more than 1, then remove the last character from the number
      //If the length is 1, then just change the displayed number to 0
  //Second scenario - when user has clicked the calculator function, but has not started inputting the second number
      //Same mechanism as the first scenario
      //But in addition, need to remove the selected function as well
  //Third scenario - when user has already clicked the calculation function, and is in the midst of inputting the second number
      //Same mechanism as first scenario, except we make the changes to the second number
  handleDeleteClick = () => {
    if (this.state.firstNumber !== "" && this.state.selectedFunction === "") {
      if (this.state.firstNumber.length > 1) {
        let shortenedNumber = this.state.firstNumber.slice(0, this.state.firstNumber.length - 1)
        this.setState({firstNumber: shortenedNumber, display: shortenedNumber})
      } else {
        this.setState({firstNumber: "", display: "0"})
      }
    } else if (this.state.secondNumber === "" && this.state.selectedFunction !== "") {
      if (this.state.firstNumber.length > 1) {
        let shortenedNumber = this.state.firstNumber.slice(0, this.state.firstNumber.length - 1)
        this.setState({firstNumber: shortenedNumber, selectedFunction: "", display: shortenedNumber})
      } else {
        this.setState({firstNumber: "", selectedFunction: "", display: "0"})
      }
    } else {
      if (this.state.secondNumber.length > 1) {
        let shortenedNumber = this.state.secondNumber.slice(0, this.state.secondNumber.length - 1)
        this.setState({secondNumber: shortenedNumber, display: shortenedNumber})
      } else {
        this.setState({secondNumber: "", display: "0"})
      }
    }
  }

  //When user clicks the point button
  //First scenario - when user has not selected any calculator function yet, meaning the user is at the first number
  handlePointClick = () => {
    if (this.state.selectedFunction === "") {
      if (this.state.firstNumber.includes(".") === false) {
        let floatNumber = this.state.firstNumber + "."
        this.setState({firstNumber: floatNumber, display: floatNumber})
      }
    } else {
      if (this.state.secondNumber.includes(".") === false) {
        let floatNumber = this.state.secondNumber + "."
        this.setState({secondNumber: floatNumber, display: floatNumber})
      }
    }
  }

  //When user clicks the theme toggle button circle, change the selected theme accordingly
  selectTheme = () => {
    if (this.state.selectedTheme === "1") {
      this.setState({selectedTheme: "2"})
    } else if (this.state.selectedTheme === "2") {
      this.setState({selectedTheme: "3"})
    } else {
      this.setState({selectedTheme: "1"})
    }
  }

  renderKeypadBackgroundColor() {
    if (this.state.selectedTheme === "1") {
      return "hsl(223, 31%, 20%)"
    } else if (this.state.selectedTheme === "2") {
      return "hsl(0, 5%, 81%)"
    } else {
      return "hsl(268, 71%, 12%)"
    }
  }


  render() {
    return (
      <div className="calculator">
        <Header selectedTheme={this.state.selectedTheme} selectTheme={this.selectTheme}/>
        <Display display={this.state.display} selectedTheme={this.state.selectedTheme}/>
        <div className="keypad" style={{backgroundColor: this.renderKeypadBackgroundColor()}}>
          <div className="row">
            {this.renderSmallButtons()}
          </div>
          <div className="row">
            {this.renderLargeButtons()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
