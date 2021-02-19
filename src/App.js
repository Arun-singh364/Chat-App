import {ChatEngine} from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";



const App=()=>{

    if(!localStorage.getItem("username")) return <LoginForm />
    return (
    <ChatEngine 
        height="100vh"
        projectID="7936a706-b520-4ad7-b1fe-376e87f509b3"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
    );
}

export default App;