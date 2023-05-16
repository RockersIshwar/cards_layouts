import React from 'react';
import { Container } from 'react-bootstrap';
import MyCardData from './MyCardData';
import CardDetails from './CardDetails';

export default function SypbourdCard() {
  return (
    <>
      <Container fluid className="myCardSection">
        <MyCardData />
      </Container>
      <CardDetails />
    </>
  );
}
