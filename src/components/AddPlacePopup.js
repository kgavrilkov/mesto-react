import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose}) {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <PopupWithForm isOpen={isOpen} name="add-card" title="Новое место" 
    onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__label">
        <input id="title-input" className="popup__input popup__input_type_place"
        type="text" name="name" required placeholder="Название" minLength="2"
        maxLength="30" />
        <span id="title-input-error" className="popup__input-error"></span>
      </label>
      <label className="popup__label">
        <input id="link-input" className="popup__input popup__input_type_link"
        type="url" name="link" required placeholder="Ссылка на картинку" />
        <span id="link-input-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;