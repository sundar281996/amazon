import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import CartItem from "./CartItem";
import { useState } from "react";

function App() {
  const product = [
    {
      id: 1,
      title: "iphone",
      price: 10000,
    },
    {
      id: 2,
      title: "imac",
      price: 20000,
    },
    {
      id: 3,
      title: "ipod",
      price: 30000,
    },
    {
      id: 4,
      title: "iwatch",
      price: 40000,
    },
    {
      id: 5,
      title: "ibottle",
      price: 50000,
    },
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };
  let removeCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {product.map((item) => {
              return (
                <Card
                  item={item}
                  cartitem={cart}
                  handleAddToCart={addToCart}
                ></Card>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4">
          {cart.length === 0 ? (
            <div>NO items in CArt</div>
          ) : (
            <div className="row ml-2">
              <ol class="list-group list-group-numbered">
                {cart.map((cartitem) => {
                  return (
                    <CartItem
                      cartitem={cartitem}
                      removeCart={removeCart}
                    ></CartItem>
                  );
                })}
              </ol>
              <h1>TOTAL-{total}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
