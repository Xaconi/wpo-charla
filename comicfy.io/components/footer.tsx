// Styles
import styles from '../styles/Footer.module.scss'

// Data
import { menuFooterData } from '../data/footer-menu.mock'
import FooterMenuItem from '../models/footer-menu-item'

const Footer = () => {
    return(
        <footer className={`${styles.csFooter} cs-flex cs-flex--row cs-flex--center-top cs-flex--gap`}>
            { menuFooterData.map((footerMenu: FooterMenuItem) => {
                return (
                    <div className={`${styles.csFooterItem}`}>
                        <h4 className={`${styles.csFooterItem__title} cs-text-type1`}>{ footerMenu.title }</h4>
                        <ul key={footerMenu.id}>
                            { footerMenu.items?.map((footerMenuItem: FooterMenuItem) => {
                                return (
                                    <li className={`${styles.csFooterItem__item} cs-text-type2`}>
                                        <a href="/">{ footerMenuItem.title }</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </footer>
    )
}

export default Footer