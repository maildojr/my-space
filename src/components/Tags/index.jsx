import React from 'react';
import styles from './Tag.module.scss';
import Photos from '../Gallery/photos.json';

export default function Tags({ tags, filterPhotos, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Filter by Tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filterPhotos(tag)}>{tag}</li>
          )
        })}
        <li onClick={()=>setItems(Photos)}>All</li>
      </ul>
    </div>
  )
}
