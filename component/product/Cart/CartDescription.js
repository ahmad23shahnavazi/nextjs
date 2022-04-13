import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

const CartDescription = () => {
  const [isTitle, setTitle] = useState("");
  const [isExist, setExist] = useState(false);
  useEffect(() => {
    const title = localStorage.getItem("title");
    setTitle(title);
    const existance = localStorage.getItem("existance");
    setExist(existance);
  }, []);
  return (
    <Box sx={{ mr: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Box
          component="div"
          sx={{ borderBottom: `${1}px solid #DCDCDC`, width: "100%" }}
        >
          <Box component="h3" sx={{ textAlign: "right" }}>
            {isTitle}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              flexDirection: "row-reverse",
              alignItems: "center",
              mb: 4,
            }}
          >
            <span>4</span>
            <Box component="span">(2)</Box>
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/fa_start.svg"
              alt=""
            ></img>

            <Box component="span" sx={{ mr: 2 }}>
              دو نظر کاربران
            </Box>
          </Box>
          {!isExist && <Box component="p">ناموجود</Box>}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "column",
            textAlign: "right",
            mb: 4,
            borderBottom: `${1}px solid #DCDCDC`,
          }}
        >
          <Box component="h2">درباره محصولات</Box>
          <Box component="h3">تولید چین</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
          }}
        >
          <Box>
            <img
              class="m-auto"
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/support.svg"
              alt=""
            />
          </Box>
          <Box>
            <img
              class="m-auto"
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/support.svg"
              alt=""
            />
          </Box>
          <Box>
            <img
              class="m-auto"
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/transport.svg"
              alt=""
            />
          </Box>
          <Box>
            <img
              class="m-auto"
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/tick.svg"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CartDescription;
