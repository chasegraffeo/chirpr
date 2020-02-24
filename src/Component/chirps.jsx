import React from "react";
import Card from "react-bootstrap/card";

let Chirps = props => {
  return (
    <Card>
      <Card.Header>{props.chirps.user}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{props.chirps.message}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Chirps;
