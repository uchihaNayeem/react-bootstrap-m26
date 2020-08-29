import React from 'react';
import { Button, Card } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div>
      <h2>React bootstrap</h2>
      <Button variant="primary">Primary</Button>
      {/* cards */}
      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
    </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default App;
