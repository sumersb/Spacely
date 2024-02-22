import Header from "../components/header";
import Message from "../components/messages/message";

//todo - give user data to message tag
export default function Threads(){
    return (
        <div className="threads">
            
            <Header />
            <div className="center-align">
                <img style={{width: '50%'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Winkel_triple_projection_SW.jpg" alt="world map" />
                <Message />
            </div>
        </div>
        
    )
}