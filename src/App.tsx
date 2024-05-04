import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductReview from "./components/ProductReview/ProductReview";
import MyCart from "./components/MyCart/MyCart";
import CheckoutUserInfo from "./components/CheckoutUserInfo/CheckoutUserInfo";
import CheckoutShippingInfo from "./components/CheckoutShippingInfo/CheckoutShippingInfo";
import CheckoutPayment from "./components/CheckoutPayment/CheckoutPayment";
import CheckoutSuccess from "./components/CheckoutSuccess/CheckoutSuccess";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/product/:productId/review" element={<ProductReview />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/checkout/user-info" element={<CheckoutUserInfo />} />
        <Route
          path="/checkout/shipping-info"
          element={<CheckoutShippingInfo />}
        />
        <Route path="/checkout/payment" element={<CheckoutPayment />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
