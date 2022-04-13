import Navbar from "../../component/Navbar";
import NavLink from "../../component/NavLink";
import { Fragment } from "react";
import ProductList from "../../component/product/ProductList";
import Email from "../../component/Email";
import Footer from "../../component/Footer";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: "0 (0)",
    price: "تومان " + "1000",
    job: "کسب و کار حمید",
    existance: false,
  },
  {
    id: "m2",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: "0 (0)",
    price: 1000,
    job: "کسب و کار حمید",
    existance: true,
  },
  {
    id: "m3",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: "0(0)",
    price: 1000,
    job: "کسب و کار حمید",
    existance: true,
  },
  {
    id: "m4",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: 0,
    price: 1000,
    job: "کسب و کار حمید",
    existance: true,
  },
  {
    id: "m5",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: 0,
    price: "1000 ریال",
    job: "کسب و کار حمید",
    existance: true,
  },
  {
    id: "m6",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: 0,
    price: 1000,
    job: "کسب و کار حمید",
    existance: true,
  },
  {
    id: "m7",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: 0,
    price: 1000,
    job: "کسب و کار حمید",
    existance: true,
  },
  {
    id: "m8",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: 0,
    price: 1000,
    job: "کسب و کار حمید",
    existance: true,
  },
  {
    id: "m9",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: 0,
    price: 1000,
    job: "کسب و کار حمید",
    existance: true,
  },
  {
    id: "m10",
    title: "محصول",
    image:
      "https://podspace.pod.ir/api/images/2DISWE2YIRCMHH6H?&amp;size=large",
    star: 0,
    price: 1000,
    job: "کسب و کار حمید",
    existance: true,
  },
];

const Products = () => {
  return (
    <Fragment>
      <Navbar />
      <NavLink />
      <ProductList card={DUMMY_MEETUPS} />
      <Email />
      <Footer />
    </Fragment>
  );
};
export default Products;
