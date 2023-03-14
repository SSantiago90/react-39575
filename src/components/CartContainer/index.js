import React, { useContext } from "react";
import cartContext from "../../context/cartContext";

function CartContainer() {
  /* 1. Conectarnos al context */
  const { cart } = useContext(cartContext);

  /* 2. Generar un listado de esos productos en el cart */

  /* 3. De forma condicional mostrar un mensaje cuando el carrito está vacío */
  if(cart.length === 0)
    return ( <div></div>) 
    
  return (
    <div>
      <h1>tu Carrito</h1>
      {cart.map((item) => {
        return (
          <div>
            <p>Producto: {item.first_name} </p>
            <p>Cantidad de unidades: {item.count} </p>
            <p>Total: {item.count * item.price}</p>
          </div>
        );
        <h3>El total de tu compra es:....</h3>
      })}
    </div>
  );
}

export default CartContainer;
