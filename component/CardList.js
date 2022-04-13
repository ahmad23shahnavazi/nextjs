import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./Button/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";
import { Fragment } from "react";

import classes from "./CardList.module.css";

const CardList = (props) => {
  SwiperCore.use([Autoplay]);

  const clickHandler = (id) => {
    localStorage.setItem("id", id.image);
    localStorage.setItem("existance", id.existance);
    localStorage.setItem("title", id.title);
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.button}>
          <div id={props.id + "-slider-prev"}>
            <Button next={false} />
          </div>
          <div id={props.id + "-slider-next"}>
            <Button next={true} />
          </div>
        </div>

        <h1 className={classes.h1}> {props.title}</h1>
      </div>

      <div id="second-slide">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={5}
          navigation={{
            prevEl: `#${props.id}-slider-prev`,
            nextEl: `#${props.id}-slider-next`,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
            },
            "@0.75": {
              slidesPerView: 3,
            },
            "@1.00": {
              slidesPerView: 4,
            },

            "@1.50": {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
          autoplay={{ delay: 3000 }}
        >
          {props.card.map((cart) => (
            <SwiperSlide>
              <CardItem
                key={cart.id}
                image={cart.image}
                star={cart.star}
                title={cart.title}
                price={cart.price}
                job={cart.job}
                existance={cart.existance}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
};
export default CardList;
