import React from 'react';
import { Card, Button } from "react-bootstrap";

const ShopCard = ({card: {title, description, img}}) => {
  const addItem = ({target}) => {
    target.classList.toggle('btn-success')
    const dangerClass = target.classList.toggle('btn-danger')
    if (dangerClass) { target.innerHTML = 'Remove' } else { target.innerHTML = 'Add' }
  }

  return (
    <Card>
      <Card.Img variant="top" src={img} height={150}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="success" onClick={addItem}>Add</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
