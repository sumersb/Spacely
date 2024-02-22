import Text from "./text/text";

//todo - Give props to text e.g <Text text="blah blah blah" />
//     - give functionality to send button

const Message = () => {
    return(
        <div className="message-board">
            <h1>MESSAGE BOARD NAME</h1>

            <Text />
            <Text />
            <Text />
            <Text />
            <input type={'text'} className="new-message" placeholder="Enter your message"></input>
            <button>send</button>
        </div>
    )
}

export default Message;