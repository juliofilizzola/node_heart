import styles from './styles.module.scss';

const LoginBox = () => {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e Compartilhe sua mensagem</strong>
      <a href="#" className={styles.singInWithGithub}>
        Entrar com o Github
      </a>
    </div>
  )
};

export default LoginBox;