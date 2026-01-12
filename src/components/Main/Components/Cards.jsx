import ImagePopup from "../Popup/ImagePopup";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

export default function Card(props) {
  const { currentUser } = useContext(CurrentUserContext);
  if (!props.card) return null;
  const { name, link, isLiked, owner, _id } = props.card;

  const cardLikeButtonClassName = `elements__like-button ${isLiked ? "elements__like-button_active" : ""}`;

  const imageComponent = { title: null, children: <ImagePopup card={props.card} /> };

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="elements__container">
      <img src={link} alt={name} className="elements__image" onClick={() => props.onCardClick(imageComponent)} />
      <div className="elements__description">
        <h2 className="elements__description-title">{name}</h2>
        <button type="button" className={cardLikeButtonClassName} aria-label="Like Card" onClick={handleLikeClick}></button>
      </div>
      <button type="button" className="elements__remove-button" aria-label="Delete Card" onClick={handleDeleteClick}></button>
    </div>
  );
}
