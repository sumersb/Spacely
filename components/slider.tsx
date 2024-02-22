import SaveCard from "./cards/save_card";
//todo - add props to slider to tell how many images we need, and what the image source will be

const Slider = () => {
    return(
        <div className="slider">
            <SaveCard />
            <SaveCard />
            <SaveCard />
            <SaveCard />
            <SaveCard />
            <SaveCard />

        </div>
    )
}

export default Slider;