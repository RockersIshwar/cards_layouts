import {
  faCircleDollarToSlot,
  faFolderTree,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../../styles/CardDetails.moduel.scss';

export default function CardDetails() {
  return (
    <Container className="p-3">
      <Row className="gy-2">
        <h2>Details</h2>
        <Col className="d-flex align-items-stretch">
          <Card className="cardDetailsBorder">
            <Card.Body>
              <Col className="cardDetailsHeading">
                <FontAwesomeIcon
                  icon={faCircleDollarToSlot}
                  className="cardDetailsHeadingIcon"
                />
                <Card.Title className="mx-2">
                  Returns & Management fees
                </Card.Title>
              </Col>
              <Col className="cardDetailsContent">
                <Card.Subtitle className="text-secondary">
                  Ann'l management fee
                </Card.Subtitle>
                <Card.Text className="text-secondary">1.5%</Card.Text>
              </Col>
              <Col className="cardDetailsContent">
                <Card.Subtitle className="text-secondary">
                  Target ann'l net return
                </Card.Subtitle>
                <Card.Text>
                  <Card.Link href="#login" className="login-link">
                    Login to view
                  </Card.Link>
                </Card.Text>
              </Col>

              <Col className="cardDetailsContent">
                <Card.Subtitle className="text-secondary">
                  Ann'l management fee
                </Card.Subtitle>
                <Card.Text>
                  <Card.Link href="#login" className="login-link">
                    Login to view
                  </Card.Link>
                </Card.Text>
              </Col>
              <Col className="cardDetailsContent">
                <Card.Subtitle className="text-secondary">
                  Ann'l management fee
                </Card.Subtitle>
                <Card.Text className="text-secondary">1.3x</Card.Text>
              </Col>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex align-items-stretch">
          <Card className="cardDetailsBorder">
            <Card.Body>
              <Col className="cardDetailsHeading">
                <FontAwesomeIcon
                  icon={faFolderTree}
                  className="cardDetailsHeadingIcon"
                />
                <Card.Title className="mx-2">Structure</Card.Title>
              </Col>
              <Col className="cardDetailsContent">
                <Card.Subtitle className="text-secondary">
                  Tax document
                </Card.Subtitle>
                <Card.Text className="text-secondary">k-1</Card.Text>
              </Col>
              <Col className="cardDetailsContent">
                <Card.Subtitle className="text-secondary">
                  Offering Structure
                </Card.Subtitle>
                <Card.Text className="text-secondary">SPV</Card.Text>
              </Col>

              <Col className="cardDetailsContent">
                <Card.Subtitle className="text-secondary">
                  Ann'l management fee
                </Card.Subtitle>
                <Card.Text className="cardStructureText">
                  0.25% and other fees disclosed in the PPM
                </Card.Text>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
