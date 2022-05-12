// Styles
import styles from '../styles/Footer.module.scss'

export const Newsletter = () => {
    return (
        <div className={`${styles.csFooterItem}`}>
            <h4 className={`${styles.csFooterItem__title} cs-text-type1`}>Newsletter</h4>
            <input className="csInput csInput--newsletter" placeholder="Escribe tu correo..." />
            <img className={`${styles.csFooter__logo} cs-margin--center`} src="img/logo.png" />
        </div>
    )
}