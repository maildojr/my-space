import LogoImg from './logo.png'
import SearchImg from './search.png'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={LogoImg} alt="Logo My Space" />
        <div className={styles.header__container}>
            <input className={styles.header__input} type="text" placeholder='Search...' />
            <img src={SearchImg} alt="Icon Seach" />
        </div>
    </header>
  )
}

export default Header