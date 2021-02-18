import {ChatEngine} from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App=()=>{
    return (
    <ChatEngine 
        height="100vh"
        projectID="7936a706-b520-4ad7-b1fe-376e87f509b3"
        userName="ArunSingh"
        userSecret="123456"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
    );
}

export default App;