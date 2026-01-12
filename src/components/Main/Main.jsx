import { useState, useEffect, useContext } from "react";
import Popup from "./Popup/Popup.jsx";
import EditAvatar from "./Form/EditAvatar/EditAvatar";
import EditProfile from "./Form/EditProfile/EditProfile";
import NewCard from "./Form/NewCard/NewCard.jsx";
import editButton from "../../images/edit.png";
import addButton from "../../images/plus.png";
import Card from "./Components/Cards.jsx";
import api from "../../utils/Api.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Main({ onOpenPopup, onClosePopup, popup, cards, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Cambiar Foto de Perfil", children: <EditAvatar /> };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={() => onOpenPopup(editAvatarPopup)}>
          <img src={currentUser.avatar} alt="Avatar" className="profile__avatar" />
          <img src={editButton} alt="edit button" className="profile__edit-icon" />
        </div>

        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__info-name">{currentUser.name}</h1>
            <p className="profile__info-title">{currentUser.about}</p>
          </div>
          <button className="profile__info-button" type="button" onClick={() => onOpenPopup(editProfilePopup)}>
            <img src={editButton} alt="edit icon" />
          </button>
        </div>
        <button type="button" className="profile__add-button" onClick={() => onOpenPopup(newCardPopup)}>
          <img src={addButton} alt="plus icon" />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onOpenPopup} onClose={onClosePopup} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
