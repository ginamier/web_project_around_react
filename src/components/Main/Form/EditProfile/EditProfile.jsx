import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name || "");
  const [description, setDescription] = useState(currentUser.about || "");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} name="edit profile" noValidate>
      <input type="text" value={name} onChange={handleNameChange} className="popup__input popup__input_type_name" name="name" placeholder="Nombre" id="popup-input-name" minLength="2" maxLength="40" required />
      <span className="popup__input-error-message" id="popup-input-name-error-message"></span>

      <input type="text" value={description} onChange={handleDescriptionChange} className="popup__input popup__input_type_about" name="about" placeholder="Acerca de mí" id="popup-input-about" minLength="2" maxLength="200" required />
      <span className="popup__input-error-message" id="popup-input-about-error-message"></span>

      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
}
