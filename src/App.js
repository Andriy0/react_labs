import './App.css';
import Menu from './components/menu/menu';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./components/noPage/noPage";
import About from "./components/about/about";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>

      <main className="mt-5">
        <section className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/" element={<Home />}/>
              <Route path="*" element={<NoPage />}/>
            </Routes>
          </BrowserRouter>
        </section>
      </main>
    </div>
  );
}

export default App;
