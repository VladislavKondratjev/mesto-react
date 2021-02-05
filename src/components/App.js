import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'

export default function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
        <div className="popup popup_type_edit">
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
        </div>
        <div className="popup popup_type_add-card">
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
        <div className="popup popup_type_update-avavtar">
          <div className="popup__content popup__content_type_avatar">
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
          </div>
        </div>
      </div>
    </div>
  );
}
