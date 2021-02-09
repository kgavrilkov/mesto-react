import React from 'react';

function Card({card, onCardClick, onCardDelete}) {
  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="card">
      <div className="card__image" style={{backgroundImage: `url(${card.link})`}} 
      onClick={handleClick}></div>
      <div className="card__item">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__item-like">
          <button type="button" className="card__like" aria-label="score"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="card__delete" aria-label="delete" 
      onClick={handleDeleteClick}></button>
    </article>
  );    
}

export default Card;