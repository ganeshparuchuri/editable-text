import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {showInput: false, inputValue: ''}

  inputClick = event => {
    this.setState({inputValue: event.target.value})
  }

  inputValueShow = () => {
    const {inputValue} = this.state
    return (
      <input
        onChange={this.inputClick}
        type="text"
        className="input-box"
        value={inputValue}
      />
    )
  }

  paragraphValue = () => {
    const {inputValue} = this.state

    return <p>{inputValue}</p>
  }

  buttonClick = () => {
    this.setState(prevState => ({showInput: !prevState.showInput}))
  }

  render() {
    const {showInput} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="c">Editable Text Input</h1>
          {showInput ? this.paragraphValue() : this.inputValueShow()}
          <button type="button" onClick={this.buttonClick} className="button">
            {showInput ? 'Edit' : 'Save'}
          </button>
        </div>
      </div>
    )
  }
}

export default App
