import React, { useState } from "react";
import Restaurant from "./components/restaurant";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [dark, setdark] = useState(
    JSON.parse(localStorage.getItem("darktheme")) || false
  );
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const ThemeClick = () => {
    setdark(!dark);
    localStorage.setItem("darktheme", dark);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <React.Fragment>
      <Navbar
        ThemeClick={ThemeClick}
        setShow={setShow}
        size={cart.length}
        dark={dark}
      />
      {show ? (
        <Restaurant dark={dark} handleClick={handleClick} />
      ) : (
        <Cart
          dark={dark}
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
        />
      )}
    </React.Fragment>
  );
};

export default App;
