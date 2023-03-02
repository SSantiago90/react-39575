import "./styles.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";

function ItemListContainer({ greeting }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("json", json);
        setUsers(json.data);
      });
  }, []);

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList users={users} />
    </>
  );
}

export default ItemListContainer;
