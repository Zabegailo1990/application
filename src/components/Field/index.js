import styles from './scss/field.module.scss'

function Field({ button, placeholder }) {

    return (
        <div className={styles.field}>
            <input className={styles.field__input} placeholder={placeholder} />
            {button}
        </div>
    )
}

export default Field
