import React from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss';
import { AuthContext } from '../../contexts/auth';

const LoginBox = () => {
  const { signInUrl } = React.useContext(AuthContext);
  
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