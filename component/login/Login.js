import Box from "@mui/material/Box";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: `${1}px solid #ECECEC`,
        width: 400,
        mr: "auto",
        ml: "auto",
        mt: 5,
        mb: 5,
      }}
    >
      <Box sx={{ m: 3 }}>
        <img
          width="122px"
          src="https://tidat.fanapsoft.ir/assets/marketplace/images/logo.svg"
          alt="لوگو"
        />
      </Box>
      <Box component="h2">ورود | ثبت نام</Box>
      <Box sx={{ textAlign: "right" }}>
        <Box component="h3">شماره موبایل خود را وارد کنید</Box>
        <Box
          component="input"
          placeholder="مثلا:09159133878"
          sx={{
            width: 300,
            height: 45,
            borderRadius: 1,
            border: `${1}px solid #ECECEC`,
          }}
        />
      </Box>
      <Box
        component="button"
        sx={{
          width: 300,
          height: 45,
          mt: 5,
          borderRadius: 1,
          bgcolor: "#FACD5D",
          border: "none",
          alignItems: "center",
        }}
      >
        ورود به سایت
      </Box>
      <Box>
        <Box
          component="button"
          sx={{
            width: 300,
            height: 45,
            mt: 8,
            borderRadius: 1,
            bgcolor: "#127AD5",
            border: "none",
          }}
        >
          <img
            class="mr-2"
            src="https://tidat.fanapsoft.ir/assets/marketplace/images/Artboard 1 1.svg"
            alt="پاد"
          />
          <Box component="span" sx={{ ml: 1 }}>
            ورود به درگاه پاد
          </Box>
        </Box>
        <Box component="p" sx={{ textAlign: "right", pb: 5 }}>
          با ورود و ثبت نام در سایت شما شرایط و قوانین استفاده از <br /> سرویس
          های سایت و قوانین حریم خصوصی آن را می پذیرید
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
