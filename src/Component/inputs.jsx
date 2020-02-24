import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/card";

let Inputs = (props) => {
  return (
    <div>
      <Card>
        <Card.Header>
          <InputGroup className="mb-3">
            <InputGroup.Prepend></InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              as="input"
              onChange= {(e)=> props.handleUserInput(e)}
            />
          </InputGroup>
        </Card.Header>
        <Card.Body>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Write Chirp!</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea"  onChange= {(e)=> props.handleMessageInput(e)} />
          </InputGroup>
          <Button variant="outline-light" onClick={props.handleClick}>Light</Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inputs;
