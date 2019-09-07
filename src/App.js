import React, { Component } from "react";
import PlayersService from "./services/players.service";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.playersService = new PlayersService();
  }

  componentDidMount = () => {
    this.playersService.getAll().then(response => {
      var players = response.data.data.players;
      this.setState({ players });
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.players &&
            this.state.players.map((player, index) => {
              return <label key={index}>{player.name}</label>;
            })}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
