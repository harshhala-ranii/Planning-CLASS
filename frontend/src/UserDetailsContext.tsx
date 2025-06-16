import React, { createContext, useContext, useState } from 'react';

interface UserDetails {
  name?: string;
  centre_name?: string;
  program?: string;
  level?: string;
  duration?: string;
  grade?: string;
}

interface UserDetailsContextType {
  userDetails: UserDetails;
  setUserDetails: (details: UserDetails) => void;
}

const UserDetailsContext = createContext<UserDetailsContextType>({
  userDetails: {},
  setUserDetails: () => {},
});

export const useUserDetails = () => useContext(UserDetailsContext);

export const UserDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({});
  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
}; 