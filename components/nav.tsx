import Link from "next/link";

export default function Nav(){

    return (
        <div className="nav">
            <button className="nav-button">
                <Link href={'/profile_about'}>
                    Profile
                </Link>
            </button>
            <button className="nav-button">
                <Link href={'/auth'}>
                    Login/Logout
                </Link>
            </button>
        </div>
    )
}