import Header from "../components/header";
import Message from "../components/messages/message";
//todo - give user data to message tag

export default function Chat(){
    return (
        <div className="chat">
            <Header />
            <div className="center-align">
                <Message />
            </div>
            
            
        </div>
        
    )
}