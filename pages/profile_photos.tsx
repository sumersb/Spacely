import Header from "../components/header";
import Photos from "../components/profile/photos";
import Link from "next/link";

//todo - give user data to photos tag

export default function ProfilePosts(){
    return (
        <div className="chat">
            
            <Header />
            <div className="top-profile">
                <img className="avatar-image" src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                <h1>John Smith</h1>
            </div>
            <hr></hr>
            <div className="center-profile">
                <button className="profile-button"><Link href={'/profile_posts'}>Posts</Link></button>
                <button className="profile-button"><Link href={'/profile_about'}>About Me</Link></button>
                <button className="profile-button active"><Link href={'/profile_photos'}>Photos</Link></button>
                
                <Photos />
            </div>
        </div>
        
    )
}