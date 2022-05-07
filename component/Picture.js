// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import required modules
import { Pagination, Navigation } from "swiper";

const Picture = () => {
  SwiperCore.use([Autoplay]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xl={3} lg={3.25}>
          <Box
            sx={{
              m: 3,
              mr: 0,
              display: `${matches === true ? "none" : "block"}`,
            }}
          >
            <img src="/images/car.png" className="car" />
          </Box>
        </Grid>
        <Grid item xl={9} lg={8.75} md={12} sm={12} xs={12}>
          <Box sx={{ m: 3 }} className="mr">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>
                <img src="/images/girl.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/girl.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/girl.png" />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Picture;
