import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <PopupWithForm isOpen={isOpen} name="edit-profile" title="Редактировать профиль" 
    onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__label">
        <input id="name-input" className="popup__input popup__input_type_name"
        type="text" name="name" required placeholder="Имя" minLength="2"
        maxLength="40" />
        <span id="name-input-error" className="popup__input-error"></span>
      </label>
      <label className="popup__label">
        <input id="job-input"className="popup__input popup__input_type_job"
        type="text" name="about" required placeholder="О себе" minLength="2"
        maxLength="200" />
        <span id="job-input-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;