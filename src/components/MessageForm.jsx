import {useState} from 'react'

const MessageForm = () => {

    const [value, setvalue] = useState('')
    const submitHandler = () =>{

    }

    const changeHandler = () =>{
        
    }

    return(
        <form className="message-form" onSubmit={submitHandler}>
            <input
                className = "message-input"
                placeholder = "Send a message"
                onChange = {changeHandler}
                value = {value}
                onSubmit = {submitHandler}
            />
        </form>    
    )
}

export default MessageForm