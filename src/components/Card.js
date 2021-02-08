export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
        console.log(props)
    }

    return (
        <article className="element" key={props.card._id}>
            <img className="element__photo" alt={props.card.name} src={props.card.link} onClick={handleClick} />
            <button type="button" className="element__delete-button button"></button>
            <div className="element__info">
                <h2 className="element__place">{props.card.name}</h2>
                <button type="button" className="element__like-button button"></button>
                <span className="element__likes">{props.card.likes.length}</span>
            </div>
        </article>
    );
}