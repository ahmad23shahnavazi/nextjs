import Navbar from "../component/Navbar";
import NavLink from "../component/NavLink";
import Picture from "../component/Picture";
import Picture1 from "../component/Picture1";
import Specials from "../component/Specials";
import { Fragment } from "react";
import CardList from "../component/CardList";
import Description from "../component/Description";
import Email from "../component/Email";
import Footer from "../component/Footer";

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
    existance: false,
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

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <NavLink />
      <Picture />
      <Picture1 />
      <Specials />
      <CardList card={DUMMY_MEETUPS} title="محبوب ترین محصولات" id="main" />
      <CardList card={DUMMY_MEETUPS} title="پرفروش ترین محصولات" id="main1" />
      <Picture1 />
      <CardList card={DUMMY_MEETUPS} title="پربازدید ترین محصولات" id="main2" />
      <Description />
      <Email />
      <Footer />
    </Fragment>
  );
};
export default Home;
