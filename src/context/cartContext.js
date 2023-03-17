import { createContext, useState } from "react";

//1 crear el context
const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

// 2 crear el provider
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, count) {
    const newCart = JSON.parse(JSON.stringify(cart));

    if (isInCart(item.id)) {
      // encontrar el item y actualizar la cantidad de unidades
      // lenny: 2 ----> lenny: 7
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      newCart[index].count = newCart[index].count + count;
    } else {
      newCart.push({ ...item, count });
    }
    setCart(newCart);
  }

  function clearCart() {
    /* vaciar carrito */
  }

  function removeItemFromCart(id) {
    /* eliminar/filtrar items con id recibido */
    /* ESTO ESTÁ MALLL  */
    const newCart = JSON.parse(JSON.stringify(cart));
    newCart.pop();
    setCart(newCart);
  }

  function getCountInCart() {
    /* reduce */
    let total = 0;
    //for(let i = 0; i < cart.length; i++)
    cart.forEach((item) => total + item.count);
    return total;
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  return (
    <Provider
      value={{ cart, addItem, test: "ok", isInCart, removeItemFromCart }}
    >
      {children}
    </Provider>
  );
}

export default cartContext;
// ComponenteA -> useContext(cartContext) ----> value
