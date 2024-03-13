import { useState } from 'react';
import UserDataContext from '../utils/userDataContext';

const Context = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserDataContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default Context;
