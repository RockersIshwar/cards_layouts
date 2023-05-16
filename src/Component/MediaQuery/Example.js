import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Example() {
  return (
    <Container>
      <Row className="g-2">
        <Col className="cardExample">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.kumar.co.uk/img/about-background.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="cardExample">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.kumar.co.uk/img/about-background.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="cardExample">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.kumar.co.uk/img/about-background.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="cardExample">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.kumar.co.uk/img/about-background.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Example;
