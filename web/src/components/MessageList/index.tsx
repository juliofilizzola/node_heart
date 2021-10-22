import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

const MessageList = () => {
  return (
    <div className={styles.MessageList}>
      <img src={logoImg} alt="logo heart"/>
    </div>
  );
};

export default MessageList;