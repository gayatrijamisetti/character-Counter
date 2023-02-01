import {Component} from 'react'
import {v4} from 'uuid'
import ResultRoute from './components/ResultRoute'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    resultList: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const resultInputList = {
      id: v4(),
      userInput: searchInput,
      letterCount: searchInput.length,
    }

    this.setState(prevState => ({
      resultList: [...prevState.resultList, resultInputList],
      searchInput: '',
    }))
  }

  renderResult = () => {
    const {resultList} = this.state
    return resultList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="image"
      />
    ) : (
      resultList.map(eachItem => (
        <ResultRoute itemDetails={eachItem} key={eachItem.id} />
      ))
    )
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="yellow-counter-container">
            <div className="yellow-top-container">
              <h1 className="heading">Count the characters like a Boss...</h1>
            </div>
            <div className="yellow-bottom-container">
              <ul>{this.renderResult()}</ul>
            </div>
          </div>
          <div className="black-container">
            <h1 className="counter-heading">Character Counter</h1>
            <div className="input-container">
              <form onSubmit={this.onClickButton}>
                <input
                  type="text"
                  value={searchInput}
                  placeholder="Enter the Characters here"
                  className="input"
                  onChange={this.onChangeSearchInput}
                />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
