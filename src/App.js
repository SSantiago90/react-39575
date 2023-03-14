import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "./pages/Prueba";
import NotFound from "./pages/NotFound";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <div className="container">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Bienvenidos"} />}
            />
            {/* URL segments */}
            <Route path="/detalle/:idUser" element={<ItemDetailContainer />} />

            <Route
              path="/category/:idCategory"
              element={<ItemListContainer greeting={"Bienvenidos"} />}
            />

            <Route path="/prueba" element={<Prueba />} />

            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
