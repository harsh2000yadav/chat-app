import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "27edd7ec-4741-43a9-804e-b145a21c5afe"
            userName= "harshh"
            userSecret= "12345"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}


export default App;