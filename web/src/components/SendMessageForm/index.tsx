import React from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import styles from './styles.module.scss';
import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';

const SendMessageForm = () => {
  const { user, signOut } = React.useContext(AuthContext);
  const [message, setMessage] = React.useState('');

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if(!message.trim()) return;

    await api.post('messages', { message });
    setMessage('');
  };

  return (
    <div className={styles.SendMessageFormWrapper}>
      <button onClick={ signOut } className={styles.signOutButton}>
        <VscSignOut size="32"/>
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name}/>
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size='16' />
          {user?.login}
        </span>
        <form onSubmit={ handleSendMessage } className={styles.sendMessageForm}>
          <label htmlFor="message">Menssagem</label>
          <textarea
            name="message"
            id="message"
            onChange={ ({ target })=> setMessage(target.value) }
            placeholder="Qual sua expectiativa para o evento?"
            value={ message }
          />
          <button type="submit">Enviar</button>
        </form>
      </header>
    </div>
  );
};

export default SendMessageForm;