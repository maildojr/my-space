import facebook  from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import styles from './Footer.module.scss'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
      <a href="www.facebook.com">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="www.instagram.com">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="www.twitter.com">
        <img src={twitter} alt="twitter" />
      </a>
      </div>
      <p>Created by Maildo Junior ®</p>
    </footer>
  )
}

export default Footer
