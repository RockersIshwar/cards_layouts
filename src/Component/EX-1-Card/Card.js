import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../image/logo.png';
export default function Card() {
  return (
    <Container fluid className="bg-primary">
      <Row>
        <Col>
          <Card.Img variant="top" src={logo} />
        </Col>
        hello
        <Col>
          <Card.Link>
            <FontAwesomeIcon icon={faHeart} />
          </Card.Link>
        </Col>
      </Row>
    </Container>
  );
}
