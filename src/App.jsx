import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import ProductsPage from "./pages/ProductsList/ProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          {/* <Route path="/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
