export default function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__image-caption">
                <button
                    type="button"
                    className="popup__close-button button popup__close-button_type_modal"
                ></button>
                <figure className="figure">
                    <img className="popup__image" alt="#" src="#" />
                    <figcaption className="popup__caption"></figcaption>
                </figure>
            </div>
        </div>
    )
}