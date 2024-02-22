import Nav from "../components/nav";
import Threads from "../components/search/thread/thread";
import Renting from "../components/search/renting/renting";
import Roommates from "../components/search/roommates/roommates";
import Subleasing from "../components/search/subleasing/subleasing";
import SearchFilter from "../components/searchFilter";

export default function Search(){

    return (
        <div>
            <SearchFilter/>
        <div className="search">
            <Nav/>
            
            <div className="search-top-half">
                <Threads/>
                <div className="map">
                    <img src="https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_960_720.png" alt="locator"></img>
                </div>
            </div>
            <div className="search-options">
                <Renting/>
                <Roommates/>
                <Subleasing/>
            </div>
        </div>
        </div>
    )
}