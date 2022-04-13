import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCart from "./ProducCart";
import { Fragment } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import React from "react";
import Link from "next/Link";
const ProductList = (props) => {
  const clickHandler = (id) => {
    localStorage.setItem("id", id.image);
    localStorage.setItem("existance", id.existance);
    localStorage.setItem("title", id.title);
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <Box component="a" sx={{ mr: 3 }}>
          لینک اول
        </Box>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} />
        <Box component="a" sx={{ mr: 3 }}>
          لینک دوم
        </Box>

        <ArrowBackIosIcon sx={{ fontSize: 15 }} />
        <Box component="p" sx={{ m: 3 }}>
          متن
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <Box
          component="button"
          sx={{
            m: 2,
            border: "none",
            p: 1,
            fontSize: 15,
            fontWeight: 100,
            bgcolor: "white",
          }}
        >
          :مرتب سازی براساس
        </Box>
        <Box
          component="button"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
            borderRadius: 3,
            bgcolor: "#E8C8C8",
            border: "none",
            p: 1,
            fontSize: 15,
            fontWeight: 100,
          }}
        >
          <Box conponent="p" sx={{ mr: 1 }}>
            پربازدیدترین ها
          </Box>
          <img
            src="https://tidat.fanapsoft.ir/assets/marketplace/images/yellow_check.svg"
            alt=""
          ></img>
        </Box>
        <Box
          component="button"
          sx={{
            m: 2,
            borderRadius: 3,

            border: "none",
            p: 1,
            fontSize: 15,
            fontWeight: 100,
            bgcolor: "white",
          }}
        >
          جدیدترین ها
        </Box>
        <Box
          component="button"
          sx={{
            m: 2,
            borderRadius: 3,

            border: "none",
            p: 1,
            fontSize: 15,
            fontWeight: 100,
            bgcolor: "white",
          }}
        >
          پر فروش ترین ها
        </Box>
        <Box
          component="button"
          sx={{
            m: 2,
            borderRadius: 3,

            border: "none",
            p: 1,
            fontSize: 15,
            fontWeight: 100,
            bgcolor: "white",
          }}
        >
          محبوب ترین ها
        </Box>
        <Box
          component="button"
          sx={{
            m: 2,
            borderRadius: 3,
            bgcolor: "white",
            border: "none",
            p: 1,
            fontSize: 15,
            fontWeight: 100,
          }}
        >
          گران ترین ها
        </Box>
        <Box
          component="button"
          sx={{
            m: 2,
            borderRadius: 3,
            bgcolor: "white",
            border: "none",
            p: 1,
            fontSize: 15,
            fontWeight: 100,
          }}
        >
          ارزان ترین ها
        </Box>
      </Box>
      <Box sx={{ m: 2 }}>
        <Grid container justifyContent="flex-end">
          {props.card.map((cart) => (
            <Grid item xl={2.4} lg={3} md={3} sm={4} xs={12}>
              <Link href="/products/ProductItem">
                <div
                  onClick={() =>
                    clickHandler({
                      id: cart.id,
                      image: cart.image,
                      title: cart.title,
                      price: cart.price,
                      job: cart.job,
                      existance: cart.existance,
                    })
                  }
                >
                  <ProductCart
                    key={cart.id}
                    id={cart.id}
                    image={cart.image}
                    star={cart.star}
                    title={cart.title}
                    price={cart.price}
                    job={cart.job}
                    existance={cart.existance}
                  />
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ArrowBackIosIcon />
        <Box component="a" sx={{ mr: 2 }}>
          4
        </Box>
        <Box component="a" sx={{ mr: 2 }}>
          3
        </Box>
        <Box component="a" sx={{ mr: 2 }}>
          2
        </Box>
        <Box component="a" sx={{ mr: 2 }}>
          1
        </Box>
        <ArrowForwardIosIcon />
      </Box>
    </Fragment>
  );
};
export default ProductList;
