//todo - add props for text area
//     - add like dislike and faveorite buttons
//     - make buttons do something
//     - maybe add something that has to do with your messages vs others messages
const Text = () => {
    return(
        <div className="message-bubble">
            <div className="talk-text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione obcaecati nostrum odit architecto sed similique facilis et reprehenderit autem earum? Cupiditate aperiam, alias delectus molestiae fugit excepturi ad iusto magnam.</p>
            </div>
            <button>like</button>
            <button>dislike</button>
            <button>favorite</button>
        </div>
    )
}

export default Text;