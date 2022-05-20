import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/Link";
const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <Box component="a" sx={{ mr: 3 }}>
          لینک اول
        </Box>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} />
        <Box component="a" sx={{ mr: 3 }}>
          لینک دوم
        </Box>

        <ArrowBackIosIcon sx={{ fontSize: 15 }} />
        <Box component="p" sx={{ m: 3 }}>
          متن
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid
          container
          direction="row-reverse"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item lg={4} xl={4} md={4} sm={4} xs={6}>
            <Box sx={{ textAlign: "right", mr: 3 }}>
              <Box component="h3">دسته بندی محصولات</Box>
              <Box component="p">
                <Link href="/products"> محصولات دیجیتال </Link>
              </Box>
              <Box component="p">
                <Link href="/products">لوازم منزل</Link>
              </Box>
              <Box component="p">
                <Link href="/products">آرایشی و بهداشتی</Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            xl={4}
            md={4}
            sm={4}
            xs={6}
            sx={{ textAlign: "right" }}
          >
            <Box component="h3">لینک‌های مفید</Box>
            <Box component="p">
              <Link href="/login">ورود به حساب کاربری</Link>
            </Box>
            <Box component="p">تماس با ما</Box>
            <Box component="p">پرسش‌های متداول</Box>
          </Grid>
          <Grid
            item
            lg={4}
            xl={4}
            md={4}
            sm={4}
            xs={6}
            sx={{ textAlign: "right", pr: 1 }}
          >
            <Box component="h3">راههای ارتباطی با ما</Box>
            <Box>
              <img
                src="https://tidat.fanapsoft.ir/assets/marketplace/images/social_1.svg"
                alt="socail_1"
              />
              <img
                src="https://tidat.fanapsoft.ir/assets/marketplace/images/social_1.svg"
                alt="socail_1"
              />
              <img
                src="https://tidat.fanapsoft.ir/assets/marketplace/images/social_3.svg"
                alt="socail_3"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Box component="span">0518866</Box>
              <img
                src="https://tidat.fanapsoft.ir/assets/marketplace/images/phone.svg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Box component="span">22 پلاک 75مشهد، وکیل آباد</Box>
              <img
                src="https://tidat.fanapsoft.ir/assets/marketplace/images/location.svg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Box component="span">salam@sample.com </Box>
              <img
                class="ml-2"
                src="https://tidat.fanapsoft.ir/assets/marketplace/images/email.svg"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ borderTop: `${1}px solid #D2D2D2` }}>
        <Grid container direction="row-reverse" alignItems="center">
          <Grid item lg={9}>
            <Box component="h3" sx={{ textAlign: "right", m: 3 }}>
              تمامی حقوق مادی و معنوی این وبسایت متعلق به سایت می باشد و هر گونه
              کپی برداری پیگرد قانونی دارد.
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box sx={{ m: 3 }}>
              <img
                src="https://tidat.fanapsoft.ir/assets/marketplace/images/enamad.png"
                alt=""
              />
              <img
                class="mr-6"
                src="https://tidat.fanapsoft.ir/assets/marketplace/images/samandehi-1.png"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Footer;
