import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Email = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const matches1 = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#2B273E", m: 3 }}>
      <Grid container direction="row-reverse" alignItems="center">
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Box
            sx={{
              mr: `${matches === true ? "20px" : "300px"}`,
              ml: `${matches1 === true ? "20px" : "5px"}`,
            }}
          >
            <Box component="h3" sx={{ textAlign: "end", color: "white" }}>
              جهت اطلاع از آخرین جشنواره ها و تخفیفات محصولات آدرس <br /> ایمیل
              خود را وارد کنید
            </Box>
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
                  bgcolor: "#2A8B4F",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://tidat.fanapsoft.ir/assets/marketplace/images/fi_send.svg"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Box
            component="img"
            src="https://tidat.fanapsoft.ir/assets/marketplace/images/Group 6783.png"
            alt=""
            sx={{ ml: `${matches1 === true ? "auto" : "50px"}` }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Email;
