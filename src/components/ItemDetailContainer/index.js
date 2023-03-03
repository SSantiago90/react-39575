import "./styles.scss";
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";

// ----------------------------------------------------------------------------
function getSingleItemFromDatabase(idItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let encontrado = products.find((item) => item.id === Number(idItem));
      resolve(encontrado);
    }, 1000);
  });
}
// -------------------------------------------------------------------------------

function ItemDetailContainer({ greeting }) {
  const [user, setUser] = useState({});

  const params = useParams();
  const idUser = params.idUser;

  /*   useEffect(() => {
    fetch("https://reqres.in/api/users/" + idUser)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("respuesta", json);
        setUser(json.data);
      });
  }, []); */

  useEffect(() => {
    getSingleItemFromDatabase(idUser).then((respuesta) => {
      setUser(respuesta);
    });
  }, []);

  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>

        <ul className="item-list">
          <li className="item-card" key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
            <small>{user.email}</small>
            <p>$5000</p>
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;
