import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import ProductsPage from "./pages/ProductsPage";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="products/:id" element={<ProductDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
