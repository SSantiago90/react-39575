import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  doc,
  collection,
  writeBatch,
} from "firebase/firestore";
import products from "../products/products";

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

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");

  console.log(orderData);

  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}

/* Opcional */
export async function exportData() {
  //for ... of
  const collectionRef = collection(db, "products");

  for (let item of products) {
    const { id } = await addDoc(collectionRef, item);
    console.log("Documento creado", id);
  }
}

export async function exportDataWithBatch() {
  const batch = writeBatch(db);
  const collectionRef = collection(db, "products");

  for (let item of products) {
    const newDoc = doc(collectionRef);
    batch.set(newDoc, item);
  }

  const resp = await batch.commit();
  console.log(resp);
}
