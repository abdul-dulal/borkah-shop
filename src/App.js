import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HeaderTop from "./components/Navbar/HeaderTop";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/about/About";
import Author from "./components/pages/blog/Author";
import Blog from "./components/pages/blog/Blog";
import BlogCategory from "./components/pages/blog/BlogCategory";
import Sinlgeblog from "./components/pages/blog/Sinlgeblog";
import Contact from "./components/pages/contact/Contact";
import Category from "./components/pages/home/Category";
import Home from "./components/pages/home/Home";
import SingleProduct from "./components/pages/home/SingleProduct";
import Login from "./components/pages/login/Login";
import SearchResult from "./components/pages/shop/SearchResult";
import Shop from "./components/pages/shop/Shop";
import Signup from "./components/pages/signup/Signup";
import Footer from "./components/shere/Footer";
export const backgroundContext = React.createContext();
function App() {
  const [popupWith, setPopupWith] = useState(false);
  return (
    <div className={`${popupWith ? "bg-gray-200" : ""}`}>
      <HeaderTop />
      <Navbar />
      <backgroundContext.Provider value={[popupWith, setPopupWith]}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/searchby/:text" element={<SearchResult />} />
          <Route path="/shop/:category" element={<Category />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<Sinlgeblog />} />
          <Route path="/category" element={<BlogCategory />} />

          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </backgroundContext.Provider>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
