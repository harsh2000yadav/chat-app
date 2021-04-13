import { ChatEngine } from 'react-chat-engine'
import './App.css'
import Login from './components/Login'
import ChatFeed from './components/ChatFeed'

const App = () => {
    if(!localStorage.getItem('username')) return <Login />

    return(
        <ChatEngine
            height = "100vh"
            projectID = "27edd7ec-4741-43a9-804e-b145a21c5afe"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}


export default App;