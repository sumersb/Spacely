//todo - prop should be given to about page to accurately represent user data

const About = () => {
    return(
        <div className="about-me">
            <h1>About Me</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officiis neque! Ex, ad ipsam. Nesciunt amet provident, id quos voluptates, deleniti maxime consequatur iste, unde accusantium modi debitis quaerat necessitatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, facere! Provident inventore sed harum. Unde rerum officiis sit, asperiores, facilis ipsum quaerat doloribus deserunt iusto, est minus maxime veniam praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus at quos neque placeat ducimus voluptates modi suscipit amet hic itaque, recusandae molestiae facilis esse, quasi, harum deleniti perspiciatis reiciendis!</p>


            <br>
            </br>
            
            <div className="quality-box">
                <div className="progress">
                    <span className="progress-right">Clean</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Dirty</span>
                </div>

                <div className="progress">
                    <span className="progress-right">Indoors</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Outdoors</span>
                </div>

                <div className="progress">
                    <span className="progress-right">Cook</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Takeout</span>
                </div>

                <div className="progress">
                    <span className="progress-right">Introvert</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Extrovert</span>
                </div>

                <div className="progress">
                    <span className="progress-right">Non-smoke</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Smoke</span>
                </div>

                <div className="progress">
                    <span className="progress-right">Early Bird</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Night Owl</span>
                </div>

                <div className="progress">
                    <span className="progress-right">No Alcohol</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Alcohol</span>
                </div>

                <div className="progress">
                    <span className="progress-right">No Guests</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Guests</span>
                </div>

                <div className="progress">
                    <span className="progress-right">Acquaintences</span>
                    <progress value="32" max="100"> 32% </progress>
                    <span className="progress-left">Friends</span>
                </div>
                
            </div>

            <div className="user-info">
                <ul>
                    <li>Pets</li>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi accusamus porro enim libero nobis tenetur voluptatum! Expedita qui, iusto quia nisi deleniti harum veniam ab praesentium voluptates, saepe ea reprehenderit.</li>
                    </ul>
                    <li>Occupation</li>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat magni, at maiores neque dignissimos aut amet doloremque voluptatibus veritatis odit odio tempora eius voluptate. Quod vero necessitatibus expedita consequatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam quibusdam nisi error mollitia quam ab sint aliquid architecto, ipsum reiciendis temporibus soluta deleniti fuga inventore voluptatibus voluptatem sed porro?</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam consequatur alias ad. Iusto eum quia ad nam reiciendis sunt blanditiis optio? Maxime laudantium quaerat consectetur officiis, voluptates quas expedita?</li>
                    </ul>
                    <li>Hobbies</li>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, nesciunt. Quis quibusdam amet a laborum quo magnam alias nemo, deleniti, voluptatum corrupti nulla officiis suscipit laboriosam voluptas, minima incidunt atque.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nesciunt quidem eos facilis quibusdam. Nam expedita asperiores harum. Cum repellat amet explicabo provident! Illo suscipit reprehenderit iste doloribus quibusdam vero.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex porro dolores soluta impedit omnis earum ad aperiam? Aperiam pariatur totam temporibus non unde deleniti molestiae animi quos natus illo.</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default About;