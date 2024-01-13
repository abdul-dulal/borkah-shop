import About from "../pages/about/About";
import Author from "../pages/blog/Author";
import Blog from "../pages/blog/Blog";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import CheckoutMethod from "../pages/payment/PaymentMethod";
import Payment from "../pages/payment/Payment";
import Shop from "../pages/shop/Shop";
import Signup from "../pages/signup/Signup";
import Wishlist from "../pages/wishlist/Wishlist";
import Cancel from "../pages/Cancel";
import Success from "../pages/Success";

export const PublicRoute = [
  { path: "/", name: "home", Component: Home },
  { path: "/home", name: "home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/shop", name: "shop", Component: Shop },
  { path: "/signup", name: "signup", Component: Signup },
  { path: "/contact", name: "contact", Component: Contact },
  { path: "/blog", name: "blog", Component: Blog },
  { path: "/cart", name: "cart", Component: Cart },
  { path: "/wishlist", name: "wishlist", Component: Wishlist },
  { path: "/checkout", name: "checkout", Component: Checkout },
  { path: "/author", name: "author", Component: Author },
  { path: "/payment", name: "payment", Component: Payment },
  { path: "/cancel", name: "cancel", Component: Cancel },
  { path: "/success", name: "success", Component: Success },

  {
    path: "/payment-method",
    name: "checkout-method",
    Component: CheckoutMethod,
  },
];
