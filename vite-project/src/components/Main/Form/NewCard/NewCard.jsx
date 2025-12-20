export default function NewCard() {
  return (
    <form className="popup__form" name="Add Card" noValidate>
      <input type="text" className="popup__input popup__input_type_title" name="name" placeholder="Título" id="popup-input-title" required minLength="2" maxLength="30" />
      <span className="popup__input-error-message" id="popup-input-title-error-message"></span>

      <input type="url" className="popup__input popup__input_type_url" name="link" placeholder="Enlace de la imagen" id="popup-input-url" required />
      <span className="popup__input-error-message" id="popup-input-url-error-message"></span>

      <button type="submit" className="popup__button">
        Crear
      </button>
    </form>
  );
}
