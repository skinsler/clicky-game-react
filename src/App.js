import React from "react";
import Tile from "./components/Tile";
import Wrapper from "./components/Wrapper";
import tiles from "./tiles.json";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    tileList : tiles,
    message : "Click an image to begin!",
    score : 0,
    clicked : [],
    highScore : 0
  }

  handleClick = id => {

    if (this.state.clicked.indexOf(id) > -1) {
      if (this.state.score > this.state.highScore) {
        this.setState({
         highScore : this.state.score
        })
      }

      this.setState({
        tiles: this.shuffleArray(this.state.tileList),
        message: "Incorrect guess!",
        score: 0,
        clicked: []
      })
    }
    else {
      if (this.state.score === this.state.tileList.length - 1) {
        this.setState({
          tiles: this.shuffleArray(this.state.tileList),
          message: "Max Score!",
          score: 0,
          highScore: this.state.tileList.length,
          clicked: []
        })
      }
      else {
        this.setState({
          tiles: this.shuffleArray(this.state.tileList),
          message: "Correct guess!",
          score: this.state.score + 1,
          clicked: this.state.clicked.concat(id)
        })
      }
    }

  };

  //Durstenfeld shuffle from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  
    return array;
  }

  render() {
    return (
      <div>
      <Navbar
        message = {this.state.message}
        score = {this.state.score}
        highScore = {this.state.highScore}
      />
      <Wrapper>
        {this.state.tileList.map(tile => (
          <Tile
          key={tile.id}
          id={tile.id}
          image={tile.image}
          handleClick={this.handleClick}
        />

        ))}
          </Wrapper>
          </div>
    );
  }
}
export default App;
