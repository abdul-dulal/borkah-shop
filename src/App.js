import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/about/About";
import BlogCategory from "./components/pages/blog/BlogCategory";
import Sinlgeblog from "./components/pages/blog/Sinlgeblog";
import Category from "./components/pages/home/Category";
import SingleProduct from "./components/pages/home/SingleProduct";
import Dashboard from "./components/pages/Myaccount/Dashboard";
import EditAddress from "./components/pages/Myaccount/EditAddress";
import EditPassword from "./components/pages/Myaccount/EditPassword";
import EditProfile from "./components/pages/Myaccount/EditProfile";
import Myaccount from "./components/pages/Myaccount/Myaccount";
import OrderHistory from "./components/pages/Myaccount/OrderHistory";
import SearchResult from "./components/pages/shop/SearchResult";
import PrivateRoute from "./components/Route/PrivateRoute";
import { PublicRoute } from "./components/Route/PublicRoute";
import Footer from "./components/shere/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {PublicRoute.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
        <Route path="/searchby/:text" element={<SearchResult />} />
        <Route path="/shop/:category" element={<Category />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/blog/:blogId" element={<Sinlgeblog />} />
        <Route path="/category" element={<BlogCategory />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />

        {/* nested route */}
        <Route
          path="/myaccount"
          element={
            <PrivateRoute>
              <Myaccount />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="editAddress" element={<EditAddress />} />
          <Route path="orderHistory" element={<OrderHistory />} />
          <Route path="editPassword" element={<EditPassword />} />
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </div>
  );
}

export default App;
