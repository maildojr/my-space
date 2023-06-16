import React from 'react';
import OpenIcon from './open.png';
import FavoriteIcon from './favorito.png';

const Card = ({ photo, styles }) => {
  return (
    <li key={photo.id} className={styles.gallery__card}>
        <img 
            className={styles.gallery__image}
            src={photo.image}
            alt={photo.title} 
        />
        <p className={styles.gallery__description}>{photo.title}</p>
        <div>
            <p>{photo.credits}</p>
            <span>
            <img src={FavoriteIcon} alt="Favorite" />
            <img src={OpenIcon} alt="Open Modal" />
            </span>
        </div>
    </li>
  )
}

export default Card
