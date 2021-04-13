import {useState} from 'react'
import {sendMessage, isTyping} from 'react-chat-engine'
import {SendOutlined, PictureOutlined} from '@ant-design/icons'

const MessageForm = (props) => {

    const [value, setValue] = useState('')
    const {chatId, creds} = props
    const submitHandler = (e) =>{
        e.preventDefault()
        const text = value.trim()
        if(text.length > 0) sendMessage(creds, chatId, {text});
        setValue('')
    }

    const changeHandler = (e) =>{
        setValue(e.target.value)
        isTyping(props, chatId)
    }

    const uploadHandler = (e) =>{
        sendMessage(creds, chatId, {files: e.target.files, text: ''})
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

            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" /> 
                </span>
            </label>
            <input
                type = "file"
                multiple = {false}
                id = "upload-button"
                style = {{display: "none"}}
                onChange = {uploadHandler}
            />

            <button className="send-button" type="submit">
                <SendOutlined className="send-icon" />
            </button>
        </form>    
    )
}

export default MessageForm