// Components
import Menu from './menu';

// Styles
import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={`cs-flex cs-flex--column cs-flex--center ${styles.csHeader}`}>
            <img className={styles.csHeader__logo} src="img/logo.png" />
            <Menu></Menu>
        </header>
    )
}

export default Header;