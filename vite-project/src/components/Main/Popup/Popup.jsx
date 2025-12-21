export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className={`popup ${!title ? "popup_type_image" : ""}`}>
      <div className={`${!title ? "popup__container_type_image" : "popup__container"}`}>
        <button type="button" className="popup__close-button" aria-label="Close Modal" onClick={onClose} />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
