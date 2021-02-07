export default function Main(props) {
    return (
        <main>
            <section className="profile">
                <div className="profile__overlay">
                    <img
                        className="profile__avatar"
                        src="#"
                        alt="Аватар"
                        onClick={props.onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__editor">
                        <h1 className="profile__name">123</h1>
                        <button
                            type="button"
                            className="profile__edit-button button"
                            onClick={props.onEditProfile}
                        ></button>
                    </div>
                    <p className="profile__description">123</p>
                </div>
                <button
                    type="button"
                    className="profile__add-button button"
                    onClick={props.onAddPlace}
                ></button>
            </section>
            <section className="elements"></section>
        </main>
    )
}

