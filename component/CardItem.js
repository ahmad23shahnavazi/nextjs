import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/Link";

const CartItem = (props) => {
  const clickHandler = () => {
    localStorage.setItem("id", props.id);
    localStorage.setItem("existance", props.existance);
    localStorage.setItem("title", props.title);
    localStorage.setItem("image", props.image);
  };
  return (
    <Link href={`/products/${props.id}`}>
      <Box
        sx={{
          width: 260,
          height: "100%",
          border: `${1}px solid #DADADA`,
          p: 1,
        }}
        onClick={clickHandler}
      >
        <Box component="div" sx={{ m: "auto" }}>
          <img src={props.image} alt="p" className="cart-width" />
        </Box>
        <Box component="div" sx={{ textAlign: "end" }}>
          {props.title}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <StarIcon sx={{ color: "#FCB333" }} />
          <Box component="p" sx={{ mb: `${props.existance === true ? 1 : 0}` }}>
            {props.star}
          </Box>
        </Box>
        {props.existance && (
          <Box component="p" sx={{ textAlign: "start", m: 0 }}>
            {props.price}
          </Box>
        )}
        {!props.existance && (
          <Box
            component="div"
            sx={{
              p: 1,
              bgcolor: "#BFBFBE",
              textAlign: "center",
              borderRadius: 20,
              m: "auto",
              width: 80,
            }}
          >
            ناموجود
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <FavoriteBorderIcon />
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              fontSize: 15,
              justifyContent: "end",
              flexDirection: "row-reverse",
            }}
          >
            <img
              src="https://tidat.fanapsoft.ir/assets/marketplace/images/icon_store.svg"
              alt="store"
              className="home"
            />

            <Box component="p" sx={{ mr: 1 }}>
              {props.job}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
export default CartItem;
