import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Specials = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container direction="row-reverse">
        <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: `${matches === true ? "center" : "end"}`,
              alignItems: "center",
              flexDirection: `${matches === true ? "column" : "row-reverse"}`,
              bgcolor: "#F1E9E0 ",
              p: 2,
              m: 2,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/Frame 5786.png"
              alt="Please set image name or cat name"
            />
            <p>موبایل و تبلت</p>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: `${matches === true ? "center" : "end"}`,
              alignItems: "center",
              flexDirection: `${matches === true ? "column" : "row-reverse"}`,
              bgcolor: "#F1E9E0 ",
              p: 2,
              m: 2,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/Frame 5786.png"
              alt="Please set image name or cat name"
            />
            <p>موبایل و تبلت</p>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: `${matches === true ? "center" : "end"}`,
              alignItems: "center",
              flexDirection: `${matches === true ? "column" : "row-reverse"}`,
              bgcolor: "#F1E9E0 ",
              p: 2,
              m: 2,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/Frame 5786.png"
              alt="Please set image name or cat name"
            />
            <p>موبایل و تبلت</p>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: `${matches === true ? "center" : "end"}`,
              alignItems: "center",
              flexDirection: `${matches === true ? "column" : "row-reverse"}`,
              bgcolor: "#F1E9E0 ",
              p: 2,
              m: 2,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/Frame 5786.png"
              alt="Please set image name or cat name"
            />
            <p>موبایل و تبلت</p>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: `${matches === true ? "center" : "end"}`,
              alignItems: "center",
              flexDirection: `${matches === true ? "column" : "row-reverse"}`,
              bgcolor: "#F1E9E0 ",
              p: 2,
              m: 2,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/Frame 5786.png"
              alt="Please set image name or cat name"
            />
            <p>موبایل و تبلت</p>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: `${matches === true ? "center" : "end"}`,
              alignItems: "center",
              flexDirection: `${matches === true ? "column" : "row-reverse"}`,
              bgcolor: "#F1E9E0 ",
              p: 2,
              m: 2,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/Frame 5786.png"
              alt="Please set image name or cat name"
            />
            <p>موبایل و تبلت</p>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: `${matches === true ? "center" : "end"}`,
              alignItems: "center",
              flexDirection: `${matches === true ? "column" : "row-reverse"}`,
              bgcolor: "#F1E9E0 ",
              p: 2,
              m: 2,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/Frame 5786.png"
              alt="Please set image name or cat name"
            />
            <p>موبایل و تبلت</p>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: `${matches === true ? "center" : "end"}`,
              alignItems: "center",
              flexDirection: `${matches === true ? "column" : "row-reverse"}`,
              bgcolor: "#F1E9E0 ",
              p: 2,
              m: 2,
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/Frame 5786.png"
              alt="Please set image name or cat name"
            />
            <p>موبایل و تبلت</p>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Specials;
