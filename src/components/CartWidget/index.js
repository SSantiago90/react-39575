import { BsFillCartFill } from "react-icons/bs";
import "./styles.scss";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

function CartWidget() {
  // 3 Usamos el context -> useContext(...)
  const { cart, test } = useContext(cartContext);

  const cartCount = cart.length;

  return (
    <span className="cart-widget">
      <BsFillCartFill className="icon" />
      <span className="badge">{cartCount}</span>
    </span>
  );
}

export default CartWidget;
