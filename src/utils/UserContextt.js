import { createContext, useState } from "react";

const UserContextt = createContext();
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: "default", password: "" });

  return (
    <UserContextt.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContextt.Provider>
  );
};

export default UserContextt;
