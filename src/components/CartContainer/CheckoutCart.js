import React, { useState } from "react";
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";

function CheckoutCart({ cart, total }) {
  const [orderId, setOrderId] = useState(null);
  const navigateTo = useNavigate();

  async function handleCheckout() {
    // Enviar a Firebase la orden de compra
    // 1. Importar firebase (la funcion)
    // 2. Crear nuestro objeto de orden
    const orderData = {
      buyer: { name: "Santiago", phone: "12345", email: "santi@santi.com" },
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    //createOrder(orderData)
    const id = await createOrder(orderData);   

    // 3. Darle feedback al usuario
    // 3.A - SweetAlert(id)
    // 3.B - Rending Condicional
    //setOrderId(id);

    // * 3.C - Redirección - React Router
    navigateTo(`/checkout/${id}`)

    // 4. vaciar el carrito del context
    // clearCart()
  }

  return (
  <div>
    {/* Formulario */}
    <button onClick={handleCheckout}>Terminar Compra</button>
  </div>
  )

  // return con rendering condicional
  /*   return (
    <div>
      {
        orderId ? 
          <h3>Gracias por tu compra</h3>
          :
          <button onClick={handleCheckout}>Terminar Compra</button>
      }      
    </div>
  ); */
}

export default CheckoutCart;
