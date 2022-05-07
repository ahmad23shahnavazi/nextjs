import Navbar from "component/Navbar";
import NavLink from "component/NavLink";
import { Fragment } from "react";
import ProductList from "component/product/ProductList";
import Email from "component/Email";
import Footer from "component/Footer";
import json from "public/store.json";

const Products = (props) => {
  return (
    <Fragment>
      <Navbar />
      <NavLink />
      <ProductList card={props.carts} />
      <Email />
      <Footer />
    </Fragment>
  );
};

export async function getStaticProps() {
  const data = await json;
  return {
    props: {
      carts: data,
    },
  };
}
export default Products;
