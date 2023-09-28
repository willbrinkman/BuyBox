import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import ProductsPage from "./pages/ProductsList/ProductsPage";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/Login/LoginPage";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./pages/Cart/CartPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            {/* <Route path="/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
