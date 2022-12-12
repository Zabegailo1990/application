import styles from './scss/banner.module.scss'
import Button from '../Button'

function Banner(props) {
    const { img, title, offer, buttonText } = props

    return (
        <div className={styles.banner}>
            <img className={styles.banner__img} src={img} alt="" />
            <div className={styles.banner__row}>
                <div className={styles.banner__col}>
                    <h1 className={styles.banner__title}>{title}</h1>
                    <div className={styles.banner__offer}>{offer}</div>
                </div>
                <Button
                    className={styles.banner__button}
                    theme="yellow"
                    text={buttonText}
                />
            </div>
        </div>
    )
}

export default Banner
