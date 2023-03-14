import "./styles.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import products from "../../products/products";
import { useParams } from "react-router-dom";
import "./notification.css";
import Loader from "../Loader";
// ----------------------------------------------------------------------------
function getItemsFromDatabase() {
  return new Promise((resolve, reject) => {
    let error = false;

    setTimeout(() => {
      if (error === true) reject("Error leyendo los datos");
      resolve(products);
    }, 3000);
  });
}

function getItemsByCategoryFromDatabase(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productsFiltered = products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productsFiltered);
    }, 3000);
  });
}
// -------------------------------------------------------------------------------

function ItemListContainer({ greeting }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const idCategory = params.idCategory;

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await getItemsFromDatabase();
      setUsers(respuesta);
      setIsLoading(false);
    } else {
      let respuesta = await getItemsByCategoryFromDatabase(idCategory);
      setUsers(respuesta);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    leerDatos();
  }, []);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      {/* 1. rendering condicional con operador ternario */}
      {isLoading ? <Loader color="purple" /> : <ItemList users={users} />}
    </div>
  );
}

export default ItemListContainer;
