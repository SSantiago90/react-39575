import "./styles.scss";
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import Loader from "../Loader";

// ----------------------------------------------------------------------------
function getSingleItemFromDatabase(idItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let encontrado = products.find((item) => item.id === Number(idItem));
      if (encontrado !== undefined) resolve(encontrado);
      else reject("No encontramos ese producto.");
    }, 1000);
  });
}
// -------------------------------------------------------------------------------

function ItemDetailContainer() {
  const [user, setUser] = useState({});

  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    getSingleItemFromDatabase(idUser)
      .then((respuesta) => {
        setUser(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  const { addItem } = useContext(cartContext);

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito`);
    addItem(user, count);
  }

  //2. rendering condicional con return anticipado (early return)
  if (user.first_name === undefined) return <Loader />;

  return (
    <>
      <div className="card-detail_main">
        <div className="card-detail_img">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="card-detail_detail">
          <h1>
            {user.first_name} {user.last_name}
          </h1>
          <h2 className="priceTag">$ 4567</h2>
          <small>{user.category}</small>
        </div>
        {<ItemCount onAddToCart={onAddToCart} initial={1} stock={user.stock} />}
      </div>
    </>
  );
}

export default ItemDetailContainer;
