import Header from "./Components/Home/Header";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";
import Wishlist from "./Pages/Wishlist";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Footer from "./Components/Home/Footer";
import Policy from "./Pages/Policy";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </>
  );
}
