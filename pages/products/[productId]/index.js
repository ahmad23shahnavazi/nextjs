import { Fragment } from "react";

import CartClick from "component/product/cart/CartClick";
import Navbar from "component/Navbar";
import NavLink from "component/NavLink";
import Email from "component/Email";
import Footer from "component/Footer";
import json from "public/store.json";

const Cart = (props) => {
  return (
    <Fragment>
      <Navbar card={props.carts} />
      <NavLink />
      <CartClick />
      <Email />
      <Footer />
    </Fragment>
  );
};
export async function getStaticPaths() {
  const data = await json;
  return {
    fallback: false,
    paths: data.map((item) => ({
      params: {
        productId: item.id,
      },
    })),
  };
}
export async function getStaticProps() {
  const data = await json;

  return {
    props: {
      carts: data,
    },
  };
}
export default Cart;
