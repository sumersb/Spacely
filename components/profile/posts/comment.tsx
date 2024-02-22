import Text from "../../messages/text/text";

//todo - add props for comments and give text tag a prop

const Comment = () => {
    return(
        <div className="comment">
            <h1>John Smith commented on this</h1>
            <hr />
            <h2>Jane Doe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti omnis a nulla? Odit laborum commodi tempora autem mollitia dicta quae earum nam veritatis! Repudiandae quisquam voluptates amet vero, nobis modi!</p>
            <hr />

            <Text />

        </div>
    )
}

export default Comment;