export default function EditAvatar() {
  return (
    <form className="popup__form" name="edit-avatar" noValidate>
      <input type="url" className="popup__input popup__input_type_avatar" name="avatar" placeholder="URL del avatar" id="popup-input-avatar" required />
      <span className="popup__input-error-message" id="popup-input-avatar-error-message"></span>
      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
}
