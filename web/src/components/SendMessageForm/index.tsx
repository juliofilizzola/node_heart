import React from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import styles from './styles.module.scss';
import { AuthContext } from '../../contexts/auth';


const SendMessageForm = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <div className={styles.SendMessageFormWrapper}>
      <button className={styles.signOutButton}>
        <VscSignOut size="32"/>
      </button>

      <header className={styles.userInformation}>
        <div>
          <img src={user?.avatar_url} alt={user?.name}/>
          <strong className={styles.userName}>{user?.name}</strong>
          <span className={styles.userGithub}>
            <VscGithubInverted size='16' />
            {user?.login}
          </span>
          <form className={styles.SendMessageForm}>
            <label htmlFor="message">Menssagem</label>
            <textarea
              name="message"
              id="message"
              placeholder="Qual sua expectiativa para o evento?"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default SendMessageForm;