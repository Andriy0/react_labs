import React from 'react';
import { Card, Button } from "react-bootstrap";

const ShopCard = ({card: {title, description}}) => {
  return (
    <Card>
      <Card.Img variant="top" src="none" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
