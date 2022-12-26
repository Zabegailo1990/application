import styles from './scss/guarantee.module.scss'
import cn from 'classnames'

function Guarantee({ className }) {
    return (
        <div className={cn(styles.guarantee, className)}>
            <img
                className={styles.guarantee__img}
                src="../media/img/guarantee.jpg"
                alt=""
            />
            <h1 className={styles.guarantee__title}>
                <span className={styles.guarantee__decor}>free</span> guarantee
            </h1>
            <p className={styles.guarantee__text}>
                Stylish bicycle mechanic doing his professional work in workshop
            </p>
        </div>
    )
}

export default Guarantee
