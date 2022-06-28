import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartContexProvider from "./context/CartContex";

function App() {
  return (
    <CartContexProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="ItemListContainer" />}
          />
          <Route
            path="/category/:category"
            element={<ItemListContainer greeting="ItemListContainer" />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContexProvider>
  );
}

export default App;
