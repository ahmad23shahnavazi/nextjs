import { Fragment } from "react";

import CartClick from "../../../component/product/cart/CartClick";
import Navbar from "../../../component/Navbar";
import NavLink from "../../../component/NavLink";
import Email from "../../../component/Email";
import Footer from "../../../component/Footer";
const Cart = () => {
  return (
    <Fragment>
      <Navbar />
      <NavLink />
      <CartClick />
      <Email />
      <Footer />
    </Fragment>
  );
};
export default Cart;
