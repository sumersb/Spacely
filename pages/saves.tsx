import Header from "../components/header";
import Slider from "../components/slider";

//todo - give user data to slider tags
export default function Saves(){
    return (
        <div className="saves">
            
            <Header />
            <div className="center-align">
                <img style={{width: '50%'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Winkel_triple_projection_SW.jpg" alt="world map" />

                <h2>All Saves</h2>
                <Slider />
                
                <h2>Category 1</h2>
                <Slider />

                <h2>Category 2</h2>
                <Slider />

                <h2>Category 3</h2>
                <Slider />
            </div>
            
            
        </div>
        
    )
}