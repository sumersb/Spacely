import Link from "next/link";

// Todo - add props for src
const SaveCard = () => {
    return(
        <div className="card">
            <Link href={'https://google.com'}>

                
                <img style={{width:'90%'}} src="https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="house" />
                <div className="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Seattle</p>
                </div>
            </Link>
            
        </div>
    )
}

export default SaveCard;