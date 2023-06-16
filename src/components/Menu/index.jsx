import React from 'react'
import styles from './Menu.module.scss'
import Icon from './Icon'
import Icons from './icons.json'


export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            {Icons.map(icon => (<Icon key={icon.id} icon={icon} styles={styles} />))}
        </ul>
    </nav>
  )
}
