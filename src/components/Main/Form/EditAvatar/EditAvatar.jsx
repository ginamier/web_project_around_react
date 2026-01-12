import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} name="edit-avatar" noValidate>
      <input ref={avatarRef} type="url" className="popup__input popup__input_type_avatar" name="avatar" placeholder="URL del avatar" id="popup-input-avatar" required />
      <span className="popup__input-error-message" id="popup-input-avatar-error-message"></span>
      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
}
