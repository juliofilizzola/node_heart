import React from 'react';
import api from '../../services/api';
import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';
import io from 'socket.io-client';

type MessageType = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url:  string;
  }
};

const messagesQueue: MessageType[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: MessageType) => {
  messagesQueue.push(newMessage);
})

const MessageList = () => {
  const [ message, setMessage ] = React.useState<MessageType[]>([]);

  React.useEffect(() => {
    api.get<MessageType[]>('/messages/last3').then((response) => {
      setMessage(response.data);
    });
  }, []);
  React.useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessage((prevState) => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean));
        messagesQueue.shift();
      }
    }, 3000)
  }, []);
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="logo heart"/>

      <ul className={styles.messageList}>
        { message.map((data) => (
          <li key={ data.text } className={styles.message}>
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