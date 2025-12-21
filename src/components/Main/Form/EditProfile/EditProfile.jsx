export default function EditProfile() {
  return (
    <form className="popup__form" name="edit profile" noValidate>
      <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Nombre" id="popup-input-name" minLength="2" maxLength="40" required />
      <span className="popup__input-error-message" id="popup-input-name-error-message"></span>

      <input type="text" className="popup__input popup__input_type_about" name="about" placeholder="Acerca de mí" id="popup-input-about" minLength="2" maxLength="200" required />
      <span className="popup__input-error-message" id="popup-input-about-error-message"></span>

      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
}
