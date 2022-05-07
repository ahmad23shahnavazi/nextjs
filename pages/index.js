import Navbar from "component/Navbar";
import NavLink from "component/NavLink";
import Picture from "component/Picture";
import Picture1 from "component/Picture1";
import Specials from "component/Specials";
import { Fragment } from "react";
import CardList from "component/CardList";
import Description from "component/Description";
import Email from "component/Email";
import Footer from "component/Footer";
import json from "public/store.json";

const Home = (props) => {
  console.log(props.carts);
  return (
    <Fragment>
      <Navbar card={props.carts} />
      <NavLink />
      <Picture />
      <Picture1 />
      <Specials />
      <CardList card={props.carts} title="محبوب ترین محصولات" id="main" />
      <CardList card={props.carts} title="پرفروش ترین محصولات" id="main1" />
      <Picture1 />
      <CardList card={props.carts} title="پربازدید ترین محصولات" id="main2" />
      <Description />
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
export default Home;
