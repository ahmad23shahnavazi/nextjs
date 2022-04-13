import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "swiper/css/bundle";
import "./styles.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: 1355,
          m: "auto",
          overflow: "hidden",
          bgcolor: "white",
        }}
      >
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
