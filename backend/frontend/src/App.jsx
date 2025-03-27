import AuthSubscriber from "./context/AuthContext";
import MainRoute from "./routes/MainRoute";
import ConversationSubscriber from "./context/ConversationContext";
import SocketSubscriber from "./context/SocketContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <AuthSubscriber>
      <SocketSubscriber>
        <ConversationSubscriber>
          <MainRoute />
          <Toaster />
        </ConversationSubscriber>
      </SocketSubscriber>
    </AuthSubscriber>
  );
};

export default App;
