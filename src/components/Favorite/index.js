import { useState } from "react";
import "./styles.css";

function Favorite() {
  const [isFav, setIsFav] = useState(false);

  function handleClick(){
    setIsFav(true)
  }

  const classNameButton= isFav? "item-card_favicon favorite" :  "item-card_favicon"

  return <button onClick={handleClick} className={classNameButton}>♥</button>;
}

export default Favorite;
