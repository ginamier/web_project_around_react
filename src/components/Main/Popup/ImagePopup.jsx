import Popup from "../Popup/Popup";

export default function ImagePopup({ card, onClose }) {
  return (
    <>
      <img src={card?.link} alt={card?.name} className="popup__image" />
      <p className="popup__caption">{card?.name}</p>
    </>
  );
}
