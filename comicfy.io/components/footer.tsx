// Styles
import styles from '../styles/Footer.module.scss'

// Data
import { menuFooterData } from '../data/footer-menu.mock'
import FooterMenuItem from '../models/footer-menu-item'

// Components
import { Newsletter } from './newsletter'

const Footer = () => {
    return(
        <>
            <footer className={`${styles.csFooter} cs-flex cs-flex--row cs-flex--center-top cs-flex--gap cs-flex--wrap`}>
                { menuFooterData.map((footerMenu: FooterMenuItem) => {
                    return (
                        <div key={footerMenu.id} className={`${styles.csFooterItem}`}>
                            <h4 className={`${styles.csFooterItem__title} cs-text-type1`}>{ footerMenu.title }</h4>
                            <ul>
                                { footerMenu.items?.map((footerMenuItem: FooterMenuItem) => {
                                    return (
                                        <li key={footerMenuItem.id} className={`${styles.csFooterItem__item} cs-text-type2`}>
                                            <a href="/">{ footerMenuItem.title }</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
                <Newsletter></Newsletter>
            </footer>
            <section className={styles.csCopyright}>
                Copyright © 2022 Comicfy.io. All rights reserved.
            </section>
        </>
    )
}

export default Footer