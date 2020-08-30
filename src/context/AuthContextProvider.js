import React, { useState } from "react";

export const AuthContext = React.createContext({ user: { name: "Test1" } });

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({ name: "Test2" });

  const setUserHandler = (name) => {
    setUser({ name });
  };

  return (
    <AuthContext.Provider value={{ user: user, setUser: setUserHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
