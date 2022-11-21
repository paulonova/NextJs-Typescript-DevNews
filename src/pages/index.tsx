import Image from 'next/image'
import SEO from '../components/SEO'
import homeImage from '../../public/home.svg'
import styles from '../styles/home.module.scss'

const Home = () => {
  return (
    <>
      <SEO title={'Dev News!'} excludeTitleSuffix />
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Hello Dev!</span>
          <h1>
            Welcome to <br />
            <span>Dev </span>News!
          </h1>
          <p>
            A blog with extreme relevant <span>content to your learning</span>
          </p>
        </section>

        <Image src={homeImage} alt={'Home image'} />
      </main>
    </>
  )
}

export default Home
