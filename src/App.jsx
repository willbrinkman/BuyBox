import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import ProductsPage from "./pages/ProductsList/ProductsPage";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            {/* <Route path="/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
