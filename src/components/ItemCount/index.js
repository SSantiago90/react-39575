import { useState } from "react";
import Button from "../Button";

const ItemCount = ({ initial, stock, onAddToCart }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <Button color="red" onTouchButton={decrease}>
          -
        </Button>
        <span className="itemcount_count">{count}</span>
        <Button color="green" onTouchButton={increase}>
          +
        </Button>
      </div>

      <div className="itemcount_btns">
        <Button
          color="lightblue"
          className="btn"
          onTouchButton={() => onAddToCart(count)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
export default ItemCount;
