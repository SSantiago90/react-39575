import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function ItemList({ users }) {
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {users.map((user) => (
          /* remplazar por componente <Item> */

          <li className="item-card" key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
            <small>{user.email}</small>
            <br />

            <Link to={`/detalle/${user.id}`}>
              <Button>
                Ver Detalles
              </Button>
            </Link>
          </li>
          /* hasta aca </Item> */
        ))}
      </ul>
    </div>
  );
}
