import React from 'react';
import api from '../../services/api';
import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

type MessageType = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url:  string;
  }
};

const MessageList = () => {
  const [ message, setMessage ] = React.useState<MessageType[]>([]);

  React.useEffect(() => {
    api.get<MessageType[]>('/messages/last3').then((response) => {
      setMessage(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="logo heart"/>

      <ul className={styles.messageList}>
        { message.map((data) => (
          <li className={styles.message}>
          <p className={styles.messageContent}>{data.text}</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src={data.user.avatar_url} alt="Foto do usuario
" />
            </div>
            <span>{data.user.name}</span>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;