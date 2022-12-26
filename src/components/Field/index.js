import styles from './scss/field.module.scss'
import cn from 'classnames'
import Button from '../Button'

function Field({ btn, placeholder }) {
    const button = () => {
        if (btn) return <Button iconPath={'icon-right'} />
    }

    return (
        <div className={styles.field}>
            <input className={styles.field__input} placeholder={placeholder} />
            {button()}
        </div>
    )
}

export default Field
