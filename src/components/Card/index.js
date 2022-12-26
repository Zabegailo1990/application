import Button from '../Button'
import styles from './scss/card.module.scss'

function Card(props) {
    const { img,  title,  price, } = props

    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={img} alt="" />
            <div className={styles.card__category}>category</div>
            <h2 className={styles.card__title}>{title}</h2>
            <div className={styles.card__rating}></div>
            <div className={styles.card__row}>
                <div className={styles.card__price}>{price}</div>
                <div className={styles.card__availability}>
                    Available for order
                </div>
            </div>
            <div className={styles.card__row}>
                <Button />
                <Button />
            </div>
        </div>
    )
}

export default Card
