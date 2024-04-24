import React from 'react';
import { Card, Button } from "react-bootstrap";
import { addToLocalStore, removeFromLocalStore, getFromLocalStore } from "../../models/localStore";

const ShopCard = (props) => {
  const itemInCart = props.cartItems.find(card => card.id === props.card.id);

  const addItem = (card) => {
    if (!getFromLocalStore(card.id)) {
      props.setCartItems(addToLocalStore(card));
    }
  }

  const removeItem = (card) => {
    if (getFromLocalStore(card.id)) {
      props.setCartItems(removeFromLocalStore(card));
    }
  }

  let button
  if (itemInCart) {
    button = <Button variant="danger" onClick={() => removeItem(props.card)}>Remove</Button>
  } else {
    button = <Button variant="success" onClick={() => addItem(props.card)}>Add</Button>
  }

  return (
    <Card>
      <Card.Img variant="top" src={props.card.img} height={150}/>
      <Card.Body>
        <Card.Title>{props.card.title}</Card.Title>
        <Card.Text>{props.card.description}</Card.Text>
        <div className="d-flex gap-2 justify-content-center">
          {button}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
