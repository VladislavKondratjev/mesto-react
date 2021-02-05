export default function Main() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_type_update-avavtar').classList.add('popup_opened');
        // document.addEventListener('keydown', this._closePopupEsc);
        // this._popupSelector.addEventListener('mousedown', this._closePopupOverlay);
    }
    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('popup_opened');
        // document.addEventListener('keydown', this._closePopupEsc);
        // this._popupSelector.addEventListener('mousedown', this._closePopupOverlay);
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add-card').classList.add('popup_opened');
        // document.addEventListener('keydown', this._closePopupEsc);
        // this._popupSelector.addEventListener('mousedown', this._closePopupOverlay);
    }

    return (
        <main>
            <section className="profile">
                <div className="profile__overlay">
                    <img
                        className="profile__avatar"
                        src="#"
                        alt="Аватар"
                        onClick={handleEditAvatarClick}
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__editor">
                        <h1 className="profile__name">123</h1>
                        <button
                            type="button"
                            className="profile__edit-button button"
                            onClick={handleEditProfileClick}
                        ></button>
                    </div>
                    <p className="profile__description">123</p>
                </div>
                <button
                    type="button"
                    className="profile__add-button button"
                    onClick={handleAddPlaceClick}
                ></button>
            </section>
            <section className="elements"></section>
        </main>
    )
}

