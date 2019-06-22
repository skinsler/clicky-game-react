import React from "react";
import Tile from "./components/Tile";
import Wrapper from "./components/Wrapper";
import tiles from "./tiles.json";
import "./App.css";
import Navbar from "./components/Navbar";
class App extends React.Component {
  state = {
    tileList : tiles
  }

  removeFriend = id => {
    const newTileList = this.state.tileList.filter(tile => tile.id !== id)
    
    this.setState({tileList: newTileList});
  }



  render() {
    return (
      <div>
      <Navbar />
      <Wrapper>
        <h1 className="title"
        //  onClick={() => this.removeFriend(1)}
        > Friends List</h1>
        {this.state.tileList.map(tile => (
          <Tile
          key={tile.id}
          id={tile.id}
          image={tile.image}
          removeFriend={this.removeFriend}
        />

        ))}
          </Wrapper>
          </div>
    );
  }
}
export default App;
