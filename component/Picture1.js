import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Fragment } from "react";

const Picture1 = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Box sx={{ m: 2 }}>
            <img src="/images/under.png" className="under" />
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Box sx={{ m: 2 }}>
            <img src="/images/under.png" className="under" />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Picture1;
