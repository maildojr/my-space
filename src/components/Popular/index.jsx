import React from 'react'
import styles from './Popular.module.scss'
import Items from './Popular.json'
import Button from './Button'

const Popular = () => {
  return (
    <aside className={styles.popular}>
        <h2>Popular</h2>
        <ul className={styles.popular__images}>
        {Items.map((item) => {
            return (
                <li key={item.id}>
                    <img src={item.path} alt={item.alt} />
                </li>
            )
        })}
        </ul>
        <Button>More Images</Button>
    </aside>
  )
}

export default Popular
