import styles from './scss/guarantee.module.scss'

function Guarantee() {
    return (
        <div className={styles.guarantee}>
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
