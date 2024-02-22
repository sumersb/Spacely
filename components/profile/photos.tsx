import Photo from "./photos/photo";

//todo - give protos src props e.g <Photo src="/blablabla.jpg"
//     - use user data to find all photos, and do iterate instead of hard coded

const Photos = () => {
    return(
        <div className="photos">
            <h2>Profile Pictures</h2>
            <hr />
            <Photo></Photo>
            <Photo></Photo>
            <Photo></Photo>
            <Photo></Photo>

            <h2>Rooms</h2>
            <hr />
            <Photo></Photo>
            <Photo></Photo>
            <Photo></Photo>
            <Photo></Photo>
        </div>
    )
}

export default Photos;