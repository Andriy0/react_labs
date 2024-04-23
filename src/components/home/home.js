import React, {useState} from 'react';
import ShopCard from "../shopCard/shopCard";

const Home = (props) => {
  const [cards] = useState([
    {id: 1, title: "title 1", description: "description 1", img: "/images/banana.jpeg"},
    {id: 2, title: "title 2", description: "description 2", img: "/images/orange.jpg"},
    {id: 3, title: "title 3", description: "description 3", img: "/images/apple.jpg"}
  ])

  return (
    <div className="row justify-content-center">
      {cards.map(card => (
        <div key={card.id} className="col-12 col-lg-3">
          <ShopCard card={card} otherval={"other"}/>
        </div>
      ))}
    </div>
  )
};

export default Home;
