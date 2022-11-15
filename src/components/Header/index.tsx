import styles from './header.module.scss'
import ActiveLink from '../ActiveLink'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="Dev News" />
        <nav>
          <ActiveLink
            activeClassName={styles.active}
            href={'/'}
            pageName={'Home'}
          />
          <ActiveLink
            activeClassName={styles.active}
            href={'/posts'}
            pageName={'Posts'}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
