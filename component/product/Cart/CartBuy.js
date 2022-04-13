import Box from "@mui/material/Box";

const CartBuy = () => {
  return (
    <Box sx={{ border: `${1}px solid  #DCDCDC`, ml: 4, mr: 2, p: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/store2.svg"
              alt=""
            />
            <Box component="p" sx={{ mr: 1 }}>
              elishanbebazar
            </Box>
          </Box>
          <Box sx={{}}>
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/fi_info.svg"
              alt=""
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              flexDirection: "row-reverse",
              alignItems: "center",
              borderBottom: `${1}px solid #DCDCDC`,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/credit-card.svg"
              alt=""
            />
            <Box component="p" sx={{ mr: 1 }}>
              پرداخت آنلاین
            </Box>
          </Box>
        </Box>
        <Box>
          <Box component="p">12 هزارتومان</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/empty_heart.svg"
              alt=""
            />
          </Box>
          <Box>
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/fi_share2.svg"
              alt=""
            />
          </Box>
          <Box>
            <Box
              component="button"
              sx={{
                border: "none",
                px: 6,
                py: 2,
                bgcolor: "#F9C24D",
                borderRadius: 2,
              }}
            >
              افزودن به سبد خرید
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CartBuy;
