import PopupWithForm from './PopupWithForm.js'

export default function EditProfilePopup(props) {

    return (
        <PopupWithForm title="Редактировать профиль" name="edit" isOpen={props.isOpen} onClose={props.onClose}>
            <input
                id="name"
                autoComplete="off"
                type="text"
                className="popup__input popup__input_type_name"
                placeholder="Имя"
                name="name"
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
            <button type="submit" className="popup__submit-button">
                Сохранить
            </button>
        </PopupWithForm >
    )
}