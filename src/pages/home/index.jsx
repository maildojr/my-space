import React from 'react'
import BannerImg from './banner.png'
import styles from './Home.module.scss'

import Header from 'components/Header'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Gallery from 'components/Gallery'
import Popular from 'components/Popular'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
        <Menu />
        <div className={styles.principal__imagem}>
            <h1>Amazing images from our galaxy!</h1>
            <img src={BannerImg} alt="Image from Space" />
        </div>
        </section>
        <div className={styles.galeria}>
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
