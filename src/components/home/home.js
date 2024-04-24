import React, {useEffect, useState} from 'react';
import ShopCard from "../shopCard/shopCard";
import {getLocalStore} from "../../models/localStore";

const Home = () => {
  const [cards] = useState([
    {id: 1, title: "title 1", description: "description 1", img: "/images/banana.jpeg"},
    {id: 2, title: "title 2", description: "description 2", img: "/images/orange.jpg"},
    {id: 3, title: "title 3", description: "description 3", img: "/images/apple.jpg"}
  ])

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setCartItems(getLocalStore())
  }, [])

  return (
    <div>
      <div className="mb-3">
        You have {cartItems.length} items in cart. <a href="/cart">Visit cart</a>
      </div>
      <div className="row justify-content-center">
        {cards.map(card => (
          <div key={card.id} className="col-12 col-lg-3">
            <ShopCard card={card} cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Home;
