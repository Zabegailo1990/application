import Field from '../Field'
import styles from './scss/signup.module.scss'

function Signup() {
    return (
        <div className={styles.signup}>
            <div className={styles.signup__row}>
                <h1 className={styles.signup__title}>
                    signup
                    <span className={styles.signup__decor}> for newsletter</span>
                </h1>
                <img
                    className={styles.signup__img}
                    src="../media/img/mail.svg"
                    alt=""
                />
            </div>
            <p className={styles.signup__text}>
                Stylish bicycle mechanic doing his professional work in workshop
            </p>
            <Field btn={true} placeholder={'Enter your E-Mail'}/>
        </div>
    )
}

export default Signup
