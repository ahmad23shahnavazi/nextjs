import React from "react";

const AuthContext = React.createContext({
  isCart: {},

  onCart: (id) => {},
});
export default AuthContext;
