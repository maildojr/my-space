import React from 'react'
import Card from './Card';

const Cards = ({ items, styles }) => {
  return (
    <ul className={styles.gallery__cards}>
        {items.map((photo) => (
            <Card key={photo.id} photo={photo} styles={styles} />
            ))}
      </ul>
  )
}

export default Cards
