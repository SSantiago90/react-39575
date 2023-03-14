import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Favorite from "../Favorite";

export default function ItemList({ users }) {
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {users.map((user) => (
          /* remplazar por componente <Item> */

          <li
            style={{ color: user.stock === 0 ? "#ee0033" : "#151515" }}
            className="item-card"
            key={user.id}
          >
            <Favorite />
            <img src={user.avatar} alt={user.first_name} />
            <br />
            {user.stock === 0 && <small>No hay stock</small>}
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
            <small>{user.email}</small>
            <br />
            {user.offer && (
              <small style={{ color: "green" }}>Oferta: {user.offer}%</small>
            )}
            <Link to={`/detalle/${user.id}`}>
              <Button>Ver Detalles</Button>
            </Link>
          </li>
          /* hasta aca </Item> */
        ))}
      </ul>
    </div>
  );
}
