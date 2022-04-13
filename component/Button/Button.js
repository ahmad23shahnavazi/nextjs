import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
const Button = (props) => {
  return (
    <Box>
      {!props.next && (
        <Box
          component="button"
          sx={{
            border: "none",
            borderRight: `${1}px solid #DADADA`,
            p: 1,
            bgcolor: "white",
          }}
        >
          <ArrowBackIosIcon />
        </Box>
      )}
      {props.next && (
        <Box
          component="button"
          sx={{
            border: "none",
            borderLeft: `${1}px solid #DADADA`,
            p: 1,
            bgcolor: "white",
          }}
        >
          <ArrowForwardIosIcon />
        </Box>
      )}
    </Box>
  );
};
export default Button;
