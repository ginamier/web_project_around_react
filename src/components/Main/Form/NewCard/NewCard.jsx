import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPlaceSubmit({ name, link });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} name="new-card" noValidate>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="popup__input" placeholder="Título" required minLength="2" />
      <input type="url" value={link} onChange={(e) => setLink(e.target.value)} className="popup__input" placeholder="Enlace a la imagen" required />
      <button type="submit" className="popup__button">
        Crear
      </button>
    </form>
  );
}
