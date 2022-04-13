import { Fragment, useEffect, useState } from "react";

import CartDescription from "./CartDescription";
import CartBuy from "./CartBuy";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CartClick = () => {
  const [isId, setId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");
    setId(id);
  });

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
      <Box>
        <Grid
          container
          direction="row-reverse"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Grid item lg={5}>
            <Box sx={{}}>
              <Box component="img" src={isId} sx={{ mr: 5, width: 500 }} />
            </Box>
          </Grid>
          <Grid item lg={4}>
            <CartDescription />
          </Grid>
          <Grid item lg={3}>
            <CartBuy />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default CartClick;
