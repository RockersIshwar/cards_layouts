import {
  faCalendar,
  faCircleCheck,
  faCircleExclamation,
  faHeart,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../image/logo.png';
import '../../styles/MyCardData.moduel.scss';

export default function MyCardData() {
  return (
    <Container className="myCardContainer">
      <Row className="my-3">
        <Col md={8} className="headerWraper">
          <Row>
            <Col>
              <Image src={logo} />
            </Col>
          </Row>
          <Row className="iconContent">
            <Col>
              <Card.Link href="#">
                <FontAwesomeIcon
                  icon={faHeart}
                  size="2xl"
                  className="heartIcon"
                />
              </Card.Link>
            </Col>
            <Col>
              <Card.Link href="#">
                <FontAwesomeIcon
                  icon={faShareNodes}
                  size="2xl"
                  className="shareIcon"
                />
              </Card.Link>
            </Col>
          </Row>
        </Col>

        <Col md={12}>
          <Card.Text className="text-white">
            Column to your content. On rare occasions, you may combine content
            and column
          </Card.Text>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={8} xs={12} className="d-flex">
          <Card className="myCardBorder">
            <Card.Body>
              <Row className="myCardContent">
                <Col lg={8}>
                  <Card.Title className="h4 text-muted m-0">Raised</Card.Title>
                  <Card.Text className="raisePrice">$ 12,997,500</Card.Text>
                  <Col className="bg-secondary rounded">
                    <Card className="progressBar"></Card>
                  </Col>
                  <Card.Text>1.60% of 500,000 GBP goal</Card.Text>
                </Col>
                <Col xs="auto" className="cardInvestors">
                  <Row>
                    <Col xs="auto" className="align-self-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="lg"
                        style={{ color: 'rgb(55 239 91)', fontSize: '40px' }}
                      />
                    </Col>
                    <Col className="investorsCardContent">
                      <Card.Title className="h4 text-muted m-0">
                        Investors
                      </Card.Title>
                      <Card.Text className="cardHeading">4,200</Card.Text>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="my-4">
                <Card.Subtitle className="h3 text-muted">
                  Time left to invest
                </Card.Subtitle>
                <Card.Text className="cardHeading">8 Day</Card.Text>
              </Row>

              <Row className="myCardContent">
                <Col md={6} className="d-grid py-2">
                  <Button className="investNowButton" size="sm">
                    Invest Now
                  </Button>
                </Col>
                <Col xs="auto" className="remainingContent">
                  <Card.Subtitle className="remainingText">
                    Remaining
                  </Card.Subtitle>
                  <Card.Text className="cardHeading">13%</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="d-flex">
          <Card className="scheduleCard" border="light">
            <Card.Body>
              <Row className="gy-3">
                <Col xs={12}>
                  <Row className="scheduleTitle">
                    <Col xs="auto">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="scheduleCardIcon"
                      />
                    </Col>
                    <Col xs="auto">
                      <Card.Title>Schedule</Card.Title>
                    </Col>
                  </Row>
                </Col>

                <Col xs={12}>
                  <Card.Subtitle className="text-white-50">
                    Payment Schedule
                  </Card.Subtitle>
                  <Card.Text>Monthly & Event based</Card.Text>
                </Col>
                <Col xs={12}>
                  <Card.Subtitle className="text-white-50">
                    Term remaining
                  </Card.Subtitle>
                  <Card.Text>26 months</Card.Text>
                </Col>
                <Col xs={12}>
                  <Card.Subtitle className="text-white-50">
                    Extension options
                  </Card.Subtitle>
                  <Card.Text>2,12-months</Card.Text>
                </Col>
                <Col className="d-grid">
                  <Button variant="light" className="scheduleButton">
                    Register Now
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-light mt-2">
        <Col className="cardAccept">
          <Card.Text>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              size="lg"
              style={{ color: '#e18f33', paddingRight: '5px' }}
            />
            Accepting $15000-$1,000,000 investments
          </Card.Text>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs="auto">
          <Card.Link href="#return" className="raiseCardLink">
            Return & Management fees
          </Card.Link>
        </Col>
        <Col xs="auto">
          <Card.Link href="#structure" className="raiseCardLink">
            Structure
          </Card.Link>
        </Col>
      </Row>
    </Container>
  );
}
