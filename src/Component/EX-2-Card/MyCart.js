import React from 'react';
import { MdOutlineFavoriteBorder, MdShare } from 'react-icons/md';

import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../image/logo1.png';
import '../../styles/MyCart.moduel.scss';
function MyCart() {
  return (
    <Container>
      <Row className="myCartContent">
        <Col>
          <Image src={logo} />
        </Col>

        <Col xs="auto">
          <Row>
            <Col>
              <Card.Link href="#">
                <MdOutlineFavoriteBorder size="2em" color="#6b36fc" />
              </Card.Link>
            </Col>
            <Col>
              <Card.Link href="#">
                <MdShare size="2em" color="#d3d3d3" />
              </Card.Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="text-secondary">
          Google Fonts is a library of 1508 open source font families and APIs
          for convenient use via CSS and Android.
        </Col>
      </Row>
      <Row className="g-3 mt-3">
        <Col md={8}>
          <Image
            src="https://www.kumar.co.uk/img/about-background.jpg"
            fluid="true"
          />
        </Col>
        <Col>
          <Card border="light">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title className="text-muted m-0">Raised</Card.Title>
                  <Card.Text className="raisePrice">$12,997,500</Card.Text>
                  <Col className="bg-secondary rounded">
                    <Col className="raiseProgessBar"></Col>
                  </Col>
                  <Card.Subtitle className="mt-2 text-muted">
                    1.60% of 500,000 GBP goal
                  </Card.Subtitle>
                </Col>
              </Row>
              <Row className="my-3">
                <Col md={12}>
                  <Card.Text className="cardTextContent">Investors</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="cardHeadingContent">4,200</Card.Text>
                </Col>
              </Row>
              <Row className="my-3">
                <Col md={12}>
                  <Card.Text className="cardTextContent">
                    Time left to invest
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="cardHeadingContent">8 days</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col className="d-grid">
                  <Button className="cardButton">Invest Now</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyCart;
