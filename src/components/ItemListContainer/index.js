import "./styles.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import products from "../../products/products";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

// ----------------------------------------------------------------------------
// Config Firebase---------------------------------------------------------

import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcMmoU_Dq3DqL-_f8iB8F7fuIs3ri8ajA",
  authDomain: "react-39575.firebaseapp.com",
  projectId: "react-39575",
  storageBucket: "react-39575.appspot.com",
  messagingSenderId: "116633603587",
  appId: "1:116633603587:web:298e0d416a2d68b3474836",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async await
//1. Obtener la referencia a mi colección "products"
//2. Llamamos a getDocs con dicha colección
//3. Dentro de la respuesta tenemos un array de documentos
//4. Extraemos los datos con doc.data()
async function getItemsFromDatabase() {
  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getItemsByCategoryFromDatabase(categoryURL) {
  const productsColectionRef = collection(db, "products");

  const q = query(productsColectionRef, where("category", "==", categoryURL));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

// Config Firebase--------------------------------------------------------------

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
  }, [idCategory]);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      {/* 1. rendering condicional con operador ternario */}
      {isLoading ? <Loader color="purple" /> : <ItemList users={users} />}
    </div>
  );
}

export default ItemListContainer;
