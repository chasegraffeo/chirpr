import React, { Component } from "react"



class App extends Component {
    constructo(props) {
        super(props);

        this.state = {
            chirp: [
                {
                    author: 'josh',
                    message: 'this is first'
                },
                {
                    author: 'josh',
                    message: 'this is second' 
                },
                {
                    author: 'josh',
                    message: 'this is third'
                }
            ],
            authorInput: '',
            messageInput: ''

        }
    }

    render() {
        return(
            <React.Fragment>
 <div>

<Card>
  <Card.Header>
  <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>

        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          as="input"
        />
      </InputGroup>
  </Card.Header>
  <Card.Body>
    
  <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Write Chirp!</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
      <Button variant="outline-light">Light</Button>{' '}
  </Card.Body>
</Card>

     

    </div>
                
            {this.state.chirp.map(chirp => {
                <Card>
                <Card.Header>{chirp.author}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {chirp.message}
                    </p>
                    
                  </blockquote>
                </Card.Body>
              </Card>

            })}
            </React.Fragment>
        )
    }
}

export default App