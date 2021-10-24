import React from 'react';
import api from '../../services/api';
import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss';

type AuthorResponseType ={
  token: string;
  user: {
    id: string;
    avatar_url:  string;
    name: string;
    login: string;
  }
};

const LoginBox = () => {
  const clientId = '8f7e3c55b2b1dce0ece0';
  const signInUrl= `https://github.com/login/oauth/authorize?scope=user&client_id=8f7e3c55b2b1dce0ece0`;


  const sign = async (githubCode: string) => {
    const AuthorResponse = await api.post<AuthorResponseType>('authenticate', {
      code: githubCode,
    });


    const { token, user } = AuthorResponse.data;

    localStorage.setItem('@dowhile:token', token);
    console.log(user);
  };

  React.useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');
    
    if (hasGithubCode) {
      const [urlWithoutCode , githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);
      sign(githubCode);
    };
  }, [])

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e Compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.singInWithGithub}>
        <VscGithubInverted size="24"/>
        Entrar com o Github
      </a>
    </div>
  );
};

export default LoginBox;