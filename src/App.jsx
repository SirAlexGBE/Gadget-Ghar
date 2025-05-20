import Header from "./Components/Home/Header";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";
import Wishlist from "./Pages/Wishlist";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Footer from "./Components/Home/Footer";
import Policy from "./Pages/Policy";
import Catagories from "./Pages/Catagory";
import PagenotFound from "./Pages/PagenotFound";
import ProductDetails from "./Pages/ProductDetails";
import {ScrollToTop} from "../src/ScrollToTop";
import User from "./Pages/User";
import {AuthProvider} from "./Context/AuthContext";
import AuthPage from "./Pages/AuthPage";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<PagenotFound />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}
