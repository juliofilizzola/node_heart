import React from 'react';
import api from '../../services/api';
import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';


const MessageList = () => {
  React.useEffect(() => {
    api.get('/messages/last3').then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="logo heart"/>

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/juliofilizzola.png" alt="Foto do usuario
" />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MessageList;