import { useState } from "react";
import Popup from "./Popup/Popup.jsx";
import EditAvatar from "./Form/EditAvatar/EditAvatar";
import EditProfile from "./Form/EditProfile/EditProfile";
import NewCard from "./Form/NewCard/NewCard.jsx";
import jacques from "../../images/jacques.jpg";
import editButton from "../../images/edit.png";
import addButton from "../../images/plus.png";
import Card from "./Components/Cards.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Cambiar Foto de Perfil", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup(popup) {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={() => handleOpenPopup(editAvatarPopup)}>
          <img src={jacques} alt="Foto de Jacques Cousteau" className="profile__avatar" />
          <img src={editButton} alt="edit button" className="profile__edit-icon" />
        </div>

        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__info-name">Jacques Cousteau</h1>
            <p className="profile__info-title">Explorador</p>
          </div>
          <button className="profile__info-button" type="button" onClick={() => handleOpenPopup(editProfilePopup)}>
            <img src={editButton} alt="edit icon" />
          </button>
        </div>
        <button type="button" className="profile__add-button" onClick={() => handleOpenPopup(newCardPopup)}>
          <img src={addButton} alt="plus icon" />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleOpenPopup} onClose={handleClosePopup} />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
