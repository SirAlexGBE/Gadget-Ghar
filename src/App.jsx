import Header from "./Components/Home/Header";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";

import Products from "./Pages/Products";
import About from "./Pages/About";

import Footer from "./Components/Home/Footer";
import Policy from "./Pages/Policy";
import Catagories from "./Pages/Catagory";
import PagenotFound from "./Pages/PagenotFound";
import ProductDetails from "./Pages/ProductDetails";
import {ScrollToTop} from "../src/ScrollToTop";
import {AuthProvider} from "./Context/AuthContext";
import AuthPage from "./Pages/AuthPage";
import User from "./Pages/User/User";
import PersonalInfo from "./Pages/User/PersonalInfo";
import Wishlist from "./Pages/User/Wishlist";
import Cart from "./Pages/User/Cart";
import Orders from "./Pages/User/Orders";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./Pages/User/Checkout";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <Header />
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/catagories" element={<Catagories />} />

          <Route path="/policy" element={<Policy />} />
          <Route path="/user" element={<User />}>
            <Route path="Personalinfo" element={<PersonalInfo />} />
            <Route path="Wishlist" element={<Wishlist />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order" element={<Orders />} />
          </Route>
          <Route path="*" element={<PagenotFound />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}
