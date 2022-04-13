import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/Link";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        mt: 1,

        display: `${matches === true ? "none" : "block"}`,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xl={0.5} lg={0.5} md={0.75} sm={1}>
          <Box sx={{ m: "auto", mt: 1 }}>
            <Box
              component="button"
              sx={{ border: "none", bgcolor: "white", cursor: "pointer" }}
            >
              <img src="https://tidat.fanapsoft.ir/assets/marketplace/images/fi_cart.svg" />
            </Box>
          </Box>
        </Grid>
        <Grid item xl={1.25} lg={1.25} md={1.75} sm={2.5}>
          <Link href="/login">
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `${1}px solid black`,
                m: "auto",
                borderRadius: 1,
                cursor: "pointer",
                width: 120,
                p: 0.75,
              }}
            >
              <sapn>ورود/ثبت نام</sapn>
              <img src="https://tidat.fanapsoft.ir/assets/marketplace/images/fi_user.svg" />
            </Box>
          </Link>
        </Grid>

        <Grid item xl={9} lg={9} md={8} sm={6.25}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="input"
              placeholder="جسنجو در پادمارت"
              sx={{
                width: "100%",
                height: 40,
                textColor: "black",
                textAlign: "right",
                pr: 6,
                borderRadius: 2,
                border: "none",
                "&:hover": {
                  border: `${2}px solid #FCB333`,
                },
                bgcolor: "#ECEAE7 ",
                ":focus": {
                  outline: 0,
                  border: `${2}px solid #FCB333`,
                },
              }}
            />
            <Box
              component="button"
              sx={{
                position: "absolute",
                right: 1,
                width: 42,
                height: 40,
                borderRadius: 2,
                border: "none",
                bgcolor: "#FCB333",
                cursor: "pointer",
              }}
            >
              <SearchIcon />
            </Box>
          </Box>
        </Grid>

        <Grid item xl={1.25} lg={1.25} md={1.25} sm={1.75}>
          <Box sx={{ m: "auto", cursor: "pointer" }}>
            <img
              width="122px"
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/logo.svg"
              alt="لوگو"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Navbar;
