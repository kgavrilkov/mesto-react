import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDelete}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => console.log(`Ошибка в информации о пользователе: ${err}`));
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch(err => console.log(`Ошибка при загрузке карточек: ${err}`));
  }, []);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar" onClick={onEditAvatar} 
        style={{backgroundImage: `url(${userAvatar})`}}></div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="button button_type_edit" aria-label="edit" 
          onClick={onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="button button_type_add" aria-label="add" 
        onClick={onAddPlace}></button>
      </section>
      <section className="cards content__cards">
        {cards.map((card, card_id) => (
          <Card
            key={card_id}
            card={card}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete} 
          />
        ))}
      </section>
    </main>
  );
}

export default Main;