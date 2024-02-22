import ProfilePosts from "../pages/profile_about";
import Select from "react-select";
import { Anek_Bangla } from "@next/font/google";

export default function searchFilter(){

    const options = [
        {value: "free parking", label: "Free Parking"},
        {value: "parking", label: "Paid Parking"},
        {value: "private bathroom", label: "Private Bathroom"},
        {value: "shared bathroom", label: "Shared Bathroom"},
    ]

    return (
        <div className="searchFilter">
            <fieldset>
                <legend>
                    Filter
                </legend>
                <label htmlFor="bathroom">Bathroom</label>
                <br/>
                <select 
                    id="bathroom" 
                    name="bathroom"
                >
                    <option value="choose">-Choose-</option>
                    <option value="private">Private</option>
                    <option value="shared">Shared</option>
                </select>
                <br/>
                <label htmlFor="parking">Parking</label>
                <br/>
                <select 
                    id="parking" 
                    name="parking"
                >
                    <option value="choose">-Choose-</option>
                    <option value="free">Free</option>
                </select>
                <br/>
                <label htmlFor="homeType">Home Type</label>
                <br/>
                <select 
                    id="homeType" 
                    name="homeType"
                >
                    <option value="choose">-Choose-</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="townHouse">Town House</option>
                </select>
                <Select
                    isMulti={true}
                    options={options}
                />
            </fieldset>
        </div>
    )
}