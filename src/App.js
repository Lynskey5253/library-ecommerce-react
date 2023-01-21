import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import { books } from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  useEffect(() => {
      console.log(cart);
  }, [cart])

  return (
        <div className="App">
          <Router>
            <Nav numberOfItems={numberOfItems()} />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/books" element={<Books books={books}/>} />
                <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
                <Route path="/cart" element={<Cart cart={cart} books={books} removeItem={removeItem} changeQuantity={changeQuantity} />} />
            </Routes>
            <Footer />
          </Router>
        </div>
  );
}

export default App;