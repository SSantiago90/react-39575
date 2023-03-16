import React from "react";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import Button from "../Button";
import "./styles.css";

function CartContainer() {
  const { cart } = useContext(cartContext);

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((user) => (
            <tr key={user.id} className="cartList_row">
              <td>
                <img height={50} src={user.avatar} alt={user.first_name} />
              </td>
              <td>{user.first_name}</td>
              <td>$ {user.price}</td>
              <td>{user.count}</td>
              <td>
                <Button color="#c63224">X</Button>
              </td>
              <th>$ --,--</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ --,--</h4>
      </div>
    </>
  );
}

export default CartContainer;
