import ImagePopup from "../Popup/ImagePopup";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const imageComponent = { title: null, children: <ImagePopup card={props.card} /> };
  return (
    <div className="elements__container">
      <img src={link} alt={name} className="elements__image" onClick={() => props.onCardClick(imageComponent)} />
      <div className="elements__description">
        <h2 className="elements__description-title">{name}</h2>
        <button type="button" className="elements__like-button" aria-label="Like Card"></button>
      </div>
      <button type="button" className="elements__remove-button" aria-label="Delete Card"></button>
    </div>
  );
}
