import React from 'react';
import api from '../services/api';


type userType = {
  id: string;
  name: string;
  login: string;
  avatar_url:  string;
};


type AuthContextType = {
  user: userType | null;
  signInUrl: string;
};

type AuthorResponseType ={
  token: string;
  user: {
    id: string;
    avatar_url:  string;
    name: string;
    login: string;
  }
};

 const AuthContext = React.createContext({} as AuthContextType);

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthProvider = (props: AuthProviderType) => {

  const [user, setUser] = React.useState<userType | null>(null);

  const clientId = '8f7e3c55b2b1dce0ece0';
  const signInUrl= `https://github.com/login/oauth/authorize?scope=user&client_id=8f7e3c55b2b1dce0ece0`;


  const sign = async (githubCode: string) => {
    const AuthorResponse = await api.post<AuthorResponseType>('authenticate', {
      code: githubCode,
    });

    const { token, user } = AuthorResponse.data;

    localStorage.setItem('@dowhile:token', token);
    setUser(user);
  };

  React.useEffect(() => {
    const token = localStorage.getItem('@dowhile:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<userType>('profile').then((response) => {
        setUser(response.data);
      });
    }
    
  }, []);

  React.useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');
    
    if (hasGithubCode) {
      const [urlWithoutCode , githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);
      sign(githubCode);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signInUrl, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };