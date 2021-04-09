const MyMessage = ({message}) => {

    if(message?.attachments?.length > 0){
        return(
            <img 
                src={message.attachments[0].file}
                className = 'message-image'
                alt= 'attachment'
                style = {{float: 'right'}}
            />
        )
    }
    return(
        <div className = 'message' style = {{float: 'right'}}>
            MyMessage
        </div>
    )
}

export default MyMessage