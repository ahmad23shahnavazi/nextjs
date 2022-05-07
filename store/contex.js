import React, { useState, useEffect } from "react";
import AuthContext from "./cart-context";

const Cartprovider = (props) => {
  const [isCart, setIsCart] = useState({});

  const cartHandler = (id) => {
    setIsCart(id);
  };

  return (
    <AuthContext.Provider
      value={{
        isCart: isCart,
        onCart: cartHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default Cartprovider;
