// Data
import { menuData } from '../data/menu.mock'

// Styles
import styles from '../styles/Menu.module.scss'

const Menu = () => {
    return (
        <nav className={`${styles.csMenu} cs-flex cs-flex--row cs-flex--center`}>
            {menuData.map((menuItem: any, index: number) => {
                return <a key={index} className={`${styles.csMenu__link} cs-text-type1`} href="">{menuItem.title}</a>
            })}
        </nav>
    )
}

export default Menu;