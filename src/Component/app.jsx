import React, { Component } from "react";

//import FormControl from "./inputs"
import Inputs from "./inputs";
//import Button from 'react-bootstrap/Button';
import Chirps from "./chirps";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `WELCOME TO CHIRPER`,
      chirp: [
        {
          user: "Chase",
          message: "this is first"
        },
        {
          user: "Tanner",
          message: "this is second"
        },
        {
          user: "Liam",
          message: "this is third"
        }
      ],
      userInput: "",
      messageInput: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value });
  }

  handleMessageInput(e) {
    this.setState({ messageInput: e.target.value });
  }

  handleClick() {
    const newChirp = {
      user: this.state.userInput,
      message: this.state.messageInput
    };
    this.setState({ chirp: [...this.state.chirp, newChirp] });
  }
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>{this.state.text}</h1>
          <br />
          <Inputs
            handleUserInput={this.handleUserInput}
            handleMessageInput={this.handleMessageInput}
            handleClick={this.handleClick}
          />
          <br />
          {this.state.chirp.map(chirp => {
            return <Chirps chirps={chirp} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default App;
