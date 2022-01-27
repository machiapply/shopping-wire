import React, { FC, ReactNode, useState, useContext, createContext } from 'react';
//@ts-ignore - why??
import users from 'data/users.json';

type UserType = {
  email?: string;
  username?: string;
  type?: 'admin' | 'donor' | 'user';
};

export interface IAuthProviderObj {
  currentUser?: UserType;
  handleUserUpdate: (email: string) => void;
}

export const AuthProviderContext =
  createContext<IAuthProviderObj>({
    handleUserUpdate: () => undefined
  });

export const useAuth = (): IAuthProviderObj => {
  return useContext(AuthProviderContext);
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState();
  const handleUserUpdate = (email: string) => {
    const user = users.find(u => u.email === email);
    setCurrentUser(user);
    return user;
  };

  return (
    <AuthProviderContext.Provider
      value={{
        currentUser,
        handleUserUpdate,
      }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;