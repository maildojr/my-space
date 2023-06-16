import Tags from '../Tags'
import styles from './Gallery.module.scss'
import Photos from './photos.json'
import Cards from './Cards';
import { useState } from 'react';


const Gallery = () => {
  const [items, setItems] = useState(Photos);
  const tags = [...new Set(Photos.map((photo) => photo.tag))]

  const filterPhotos = (tag) => {
    const tagPhotos = Photos.filter((photo) => {
      return photo.tag === tag;
    })

    setItems(tagPhotos);
  }

  return (
    <section className={styles.gallery}>
      <h2>Gallery</h2>
      <Tags tags={tags} filterPhotos={filterPhotos} setItems={setItems} />
      <Cards items={items} styles={styles} />
    </section>
  )
}

export default Gallery
