import jacques from "../../images/jacques.jpg";
import editButton from "../../images/edit.png";
import addButton from "../../images/plus.png";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={jacques} alt="Foto de Jacques Cousteau" className="profile__avatar" />
          <img src={editButton} alt="edit button" className="profile__edit-icon" />
        </div>

        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__info-name">Jacques Cousteau</h1>
            <p className="profile__info-title">Explorador</p>
          </div>
          <button className="profile__info-button" type="button">
            <img src={editButton} alt="edit icon" />
          </button>
        </div>
        <button type="button" className="profile__add-button">
          <img src={addButton} alt="plus icon" />
        </button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
