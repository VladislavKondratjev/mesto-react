import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js'

export default function App() {
  const [avatarIsOpen, setAvatarIsOpen] = React.useState(false);
  const [addIsOpen, setAddIsOpen] = React.useState(false);
  const [editIsOpen, setEditIsOpen] = React.useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = React.useState(false);
  //const [close, setClose] = React.useState(false);

  function handleEditAvatarClick() {
    setAvatarIsOpen(!avatarIsOpen)
  }

  function handleEditProfileClick() {
    setEditIsOpen(!editIsOpen)
  }

  function handleAddPlaceClick() {
    setAddIsOpen(!addIsOpen)
  }

  function handleConfirmClick() {
    setConfirmIsOpen(!confirmIsOpen)
  }

  function closeAllPopups() {
    setAvatarIsOpen(false);
    setAddIsOpen(false);
    setEditIsOpen(false);
    setConfirmIsOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onClose={closeAllPopups}
        />
        <Footer />
        <PopupWithForm title="Редактировать профиль" name="edit" isOpen={editIsOpen} onClose={closeAllPopups}>
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
        </PopupWithForm >
        <PopupWithForm title="Новое место" name="add-card" isOpen={addIsOpen} onClose={closeAllPopups}>
          <input
            id="place"
            type="text"
            autoComplete="off"
            className="popup__input popup__input_type_place popup__input_type_modal"
            placeholder="Название"
            name="name"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="place-error" className="error"></span>
          <input
            id="url"
            autoComplete="off"
            className="popup__input popup__input_type_photo popup__input_type_modal"
            placeholder="Ссылка на картинку"
            name="link"
            type="url"
            required
          />
        </PopupWithForm>
        <PopupWithForm title="Обновить аватар" name="update-avavtar" isOpen={avatarIsOpen} onClose={closeAllPopups}>
          <input
            id="link"
            autoComplete="off"
            className="popup__input popup__input_type_avatar popup__input_type_modal"
            placeholder="Ссылка на картинку"
            name="link"
            type="url"
            required
          />
          <span id="link-error" className="error"></span>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="confirm" isOpen={confirmIsOpen} onClose={closeAllPopups}>
          <div className="popup__form">
            <h3 className="popup__title popup__title_type_confirm">Вы уверены?</h3>
            <button
              type="submit"
              className="popup__submit-button button delete-card"
            >
              Да
            </button>
          </div>
        </PopupWithForm>

        {/* <div className="popup popup_type_edit">
          <div className="popup__content">
            <button type="button" className="popup__close-button button"></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" method="PATCH" action="#" name="edit-form">
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
              <span id="description-error" className="error"></span>
              <button type="submit" className="popup__submit-button">
                Сохранить
            </button>
            </form>
          </div>
        </div> */}
        {/* <div className="popup popup_type_add-card">
          <div className="popup__content popup__content_type_new-card">
            <button
              type="button"
              className="popup__close-button button popup__close-button_type_modal"
            ></button>
            <h3 className="popup__title popup__title_type_newplace">Новое место</h3>
            <form
              className="popup__form add-element-form popup__form_type_modal"
              method="POST"
              action="#"
              name="add-card"
            >
              <input
                id="place"
                type="text"
                autoComplete="off"
                className="popup__input popup__input_type_place popup__input_type_modal"
                placeholder="Название"
                name="name"
                minLength="2"
                maxLength="30"
                required
              />
              <span id="place-error" className="error"></span>
              <input
                id="url"
                autoComplete="off"
                className="popup__input popup__input_type_photo popup__input_type_modal"
                placeholder="Ссылка на картинку"
                name="link"
                type="url"
                required
              />
              <span id="url-error" className="error"></span>
              <button type="submit" className="popup__submit-button">Создать</button>
            </form>
          </div>
        </div>
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
        <div className="popup popup_type_confirm">
          <div className="popup__content">
            <button type="button" className="popup__close-button button"></button>
            <div className="popup__form">
              <h3 className="popup__title popup__title_type_confirm">Вы уверены?</h3>
              <button
                type="submit"
                className="popup__submit-button button delete-card"
              >
                Да
            </button>
            </div>
          </div>
        </div>
        <div className="popup popup_type_update-avavtar"> */}
        {/* <div className="popup__content popup__content_type_avatar">
          <button
            type="button"
            className="popup__close-button button popup__close-button_type_modal"
          ></button>
          <h3 className="popup__title popup__title_type_newplace">
            Обновить аватар
          </h3>
          <form
            className="popup__form update-avatar-form popup__form_type_modal"
            method="PATCH"
            action="#"
            name="update-avatar"
          >
            <input
              id="link"
              autoComplete="off"
              className="popup__input popup__input_type_avatar popup__input_type_modal"
              placeholder="Ссылка на картинку"
              name="link"
              type="url"
              required
            />
            <span id="link-error" className="error"></span>
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div> */}
        {/* </div> */}
      </div>
    </div >
  );
}
