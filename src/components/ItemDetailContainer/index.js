import "./styles.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import Loader from "../Loader";

// Config Firebase---------------------------------------------------------

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

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

async function getSingleItemFromDatabase(idItem) {
  // referencia de la colección y del documento
  const productsColectionRef = collection(db, "products");
  const docRef = doc(productsColectionRef, idItem);

  // getDoc -> datos
  const docSnapshot = await getDoc(docRef);

  // extra
  if (docSnapshot.exists() === false) 
    throw new Error("No existe el documento") 

  return { ...docSnapshot.data(), id: docSnapshot.id };
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
          <h2 className="priceTag">$ {user.price}</h2>
          <small>{user.category}</small>
        </div>
        {<ItemCount onAddToCart={onAddToCart} initial={1} stock={user.stock} />}
      </div>
    </>
  );
}

export default ItemDetailContainer;
