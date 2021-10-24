import React from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss';

const LoginBox = () => {
  const clientId = '8f7e3c55b2b1dce0ece0';
  const signInUrl= `https://github.com/login/oauth/authorize?scope=user&client_id=8f7e3c55b2b1dce0ece0`;

  React.useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');
    
    if (hasGithubCode) {
      const [urlWithoutCode , githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);
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