import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/Link";
const NavLink = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        alignItems: "center",
        bgcolor: "#4B4A49",
        color: "white",
        mt: 1,
        height: 34,
        display: `${matches === true ? "none" : "flex"}`,
      }}
    >
      <Box
        component="ui"
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        <Box
          component="li"
          sx={{
            mr: 5,
            p: 1,
            bgcolor: "#4B4A49",
            "&:hover": {
              bgcolor: "#F2C409",
              cursor: "pointer",
            },
          }}
        >
          <Link href="/products">محصولات دیجیتال</Link>
        </Box>
        <Box
          component="li"
          sx={{
            mr: 2,
            p: 1,
            cursor: "pointer",
            bgcolor: "#4B4A49",
            "&:hover": {
              bgcolor: "#F2C409",
            },
          }}
        >
          <Link href="/products">لوازم منزل</Link>
        </Box>
        <Box
          component="li"
          sx={{
            mr: 2,
            p: 1,
            cursor: "pointer",
            bgcolor: "#4B4A49",
            "&:hover": {
              bgcolor: "#F2C409",
            },
          }}
        >
          <Link href="/products">آرایشی و بهداشتی</Link>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            ml: 5,
            cursor: "pointer",
          }}
        >
          <img
            class="ml-2"
            src="https://tidat.fanapsoft.ir/assets/marketplace/images/Store.svg"
            alt="store"
          />
          <Box sx={{ mr: 1 }}>
            <span>با ما بفروشید</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavLink;
