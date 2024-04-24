import React, {useEffect, useState} from 'react';
import {getFromLocalStore, getLocalStore, removeFromLocalStore} from "../../models/localStore";
import {Button} from "react-bootstrap";

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setCartItems(getLocalStore());
  }, [])

  const removeItem = (card) => {
    if (getFromLocalStore(card.id)) {
      setCartItems(removeFromLocalStore(card));
    }
  }

  return (
    <div>
      <div className="mb-3">Your items:</div>
      <div>
        <dl>
          {cartItems.map(card => (
            <div key={card.id} className="mb-3">
              <dt>{card.title}</dt>
              <dd>
                <div className="row gap-2">
                  <div className="col">{card.description}</div>
                  <div className="col-sm-12">
                    <Button className="btn btn-sm btn-danger" onClick={() => removeItem(card)}>Remove</Button>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Cart;
