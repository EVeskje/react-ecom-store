import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./index.css";
import { Layout } from "./components/Layout/index";
import { Home, ProductPage, Contact, ShoppingCart, CheckoutSuccessPage } from "./Pages";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productPage/:id" element={<ProductPage id />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="checkoutSuccessPage" element={<CheckoutSuccessPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
