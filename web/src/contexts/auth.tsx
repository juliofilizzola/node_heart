import React from 'react';

const AuthContext = React.createContext(null);

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthProvider = (props: AuthProviderType) => {
  return (
    <AuthContext.Provider value={null}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;