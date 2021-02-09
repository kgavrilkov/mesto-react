import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose}) {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <PopupWithForm isOpen={isOpen} name="edit-avatar" title="Обновить аватар" 
    onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__label">
        <input id="avatar-input" className="popup__input popup__input_type_link"
        type="url" name="avatar" required placeholder="Ссылка на изображение" />
        <span id="avatar-input-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm> 
  );
}

export default EditAvatarPopup;