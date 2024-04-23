import './App.css';
import Menu from './components/menu/menu';
import ShopCard from './components/shopCard/shopCard';
import {useState} from "react";

function App() {
  const [cards] = useState([
      {id: 1, title: "title 1", description: "description 1"},
      {id: 2, title: "title 2", description: "description 2"},
      {id: 3, title: "title 3", description: "description 3"}
    ])

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>

      <main className="mt-5">
        <section className="container">
          <div className="row justify-content-center">
            {cards.map(card => (
              <div key={card.id} className="col-12 col-lg-3">
                <ShopCard card={card} otherval={"other"} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
