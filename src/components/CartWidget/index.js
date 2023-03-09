import { BsFillCartFill } from "react-icons/bs";
import "./styles.scss";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

function CartWidget() {
  const { cart } = useContext(cartContext);

  const cartCount = cart.length;

  return (
    <a href="#" className="cart-widget">
      <BsFillCartFill className="icon" />
      <span className="badge">{cartCount}</span>
    </a>
  );
}

export default CartWidget;
