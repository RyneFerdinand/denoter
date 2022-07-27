import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext({
  userID: "",
});

const ContextProvider = (props) => {
  const [user, setUser] = useState("");

  return (
    <div className="">
      <UserContext.Provider value={{ userID: user }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export { ContextProvider, UserContext };
