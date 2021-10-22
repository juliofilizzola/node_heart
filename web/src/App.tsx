import style from "./App.module.scss";
import LoginBox from "./components/LoginBox";
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";

function App() {
  return (
    <main className={style.contentWrapper}>
      <MessageList/>
      <LoginBox/>
      <SendMessageForm/>
    </main>
  );
};

export default App;
