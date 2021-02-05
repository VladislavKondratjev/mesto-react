function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__content">
                <button type="button" className="popup__close-button button"></button>
                <h3 className="popup__title">{`${props.title}`}</h3>
                <form className="popup__form" method="PATCH" action="#" name="edit-form">
                    <input
                        id="name"
                        autoComplete="off"
                        type="text"
                        className="popup__input popup__input_type_name"
                        placeholder="Имя"
                        name={`${props.name}`}
                        minLength="2"
                        maxLength="40"
                        required
                    />
                    <span id="name-error" className="error"></span>
                    <input
                        id="description"
                        autoComplete="off"
                        type="text"
                        className="popup__input popup__input_type_description"
                        placeholder="О себе"
                        name="description"
                        minLength="2"
                        maxLength="200"
                        required
                    />
                    <span id="description-error" className="error"></span>
                    <button type="submit" className="popup__submit-button">
                        Сохранить
            </button>
                </form>
            </div>
        </div>

    )
}