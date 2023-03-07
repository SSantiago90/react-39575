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
    <div>
      <Button onTouchButton={decrease} color="red">
        -
      </Button>
      <span className="contador"> {count} </span>
      <Button onTouchButton={increase} color="green">
        +
      </Button>
      <button onClick={() => onAddToCart(count)}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;
