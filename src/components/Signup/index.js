import Field from '../Field'
import Icon from '../Icon'
import Button from '../Button'
import styles from './scss/signup.module.scss'

function Signup() {
    return (
        <div className={styles.signup}>
            <div className={styles.row}>
                <h1 className={styles.title}>
                    signup
                    <span className={styles.decor}>
                        {' '}
                        for newsletter
                    </span>
                </h1>
                <img
                    className={styles.img}
                    src="../media/img/mail.svg"
                    alt=""
                />
            </div>
            <p className={styles.text}>
                Stylish bicycle mechanic doing his professional work in workshop
            </p>
            <Field
                button={<Button icon={<Icon iconName={'icon-right'} />} />}
                placeholder={'Enter your E-Mail'}
            />
        </div>
    )
}

export default Signup
