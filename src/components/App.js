import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js'
import EditProfilePopup from './EditProfilePopup.js'
import ImagePopup from './ImagePopup.js'
import { CurrentUserContext } from '../constexts/CurrentUserContext'
import { api } from "../utils/api";



export default function App() {
  const [isEditAvatarPopupOpen, setAvatarIsOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddIsOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditIsOpen] = React.useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getUserData()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => console.log(err));

    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, [])


  function handleEditAvatarClick() {
    setAvatarIsOpen(true)
  }

  function handleEditProfileClick() {
    setEditIsOpen(true)
  }

  function handleAddPlaceClick() {
    setAddIsOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link })
  }

  function closeAllPopups() {
    setAvatarIsOpen(false);
    setAddIsOpen(false);
    setEditIsOpen(false);
    setConfirmIsOpen(false);
    setSelectedCard(false)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) =>
          c._id === card._id
            ? newCard
            : c);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deletetCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => {
          return c._id !== card._id
        })
        setCards(newCards)
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            cards={cards}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onClose={closeAllPopups}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <ImagePopup name="image-caption" isOpen={selectedCard} card={selectedCard} onClose={closeAllPopups} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
          <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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
          </PopupWithForm>
          <PopupWithForm title="Обновить аватар" name="update-avavtar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
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
        </div>
      </div >
    </CurrentUserContext.Provider>
  );
}

