import styles from './scss/field.module.scss'

function Field() {
    return (
        <div className={styles.field}>
            <input className={styles.field__input} />
        </div>
    )
}

export default Field
