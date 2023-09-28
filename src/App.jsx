import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import ProductsPage from "./pages/ProductsList/ProductsPage";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/Login/LoginPage";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./pages/Cart/CartPage";
import Navbar from "./components/Navbar/Navbar";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

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
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" elkement={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
