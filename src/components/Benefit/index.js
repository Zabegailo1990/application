import styles from './scss/benefit.module.scss'

function Benefit(props) {
    const {img, title, text} = props
    return (
        <div className={styles.benefit}>
            <img className={styles.benefit__img} src={img} alt="" />
            <h2 className={styles.benefit__title}>{title}</h2>
            <p className={styles.benefit__text}>{text}</p>
        </div>
    )
}

export default Benefit
