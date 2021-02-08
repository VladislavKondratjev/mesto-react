import { api } from "../utils/api";
import React from 'react';
import Card from './Card.js';

export default function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
            .then((res) => {
                setUserAvatar(res.avatar)
                setUserName(res.name)
                setUserDescription(res.about)
            })
            .catch((err) => console.log(err));

        api.getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__overlay">
                    <img
                        className="profile__avatar"
                        src={userAvatar}
                        alt="Аватар"
                        onClick={props.onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__editor">
                        <h1 className="profile__name">{userName}</h1>
                        <button
                            type="button"
                            className="profile__edit-button button"
                            onClick={props.onEditProfile}
                        ></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button
                    type="button"
                    className="profile__add-button button"
                    onClick={props.onAddPlace}
                ></button>
            </section>
            <section className="elements">
                {cards.map((card) => { return (<Card key={card._id} card={card} onCardClick={props.onCardClick} />) })}
            </section>
        </main>
    )
}

