import classNames from 'classnames'
import styles from './scss/category.module.scss'

function Category(props) {
    const { parentClass = '', img, title } = props
    const classes = classNames({
        [styles.category]: true,
        [parentClass]: true,
    })

    return (
        <div className={classes}>
            <img className={styles.category__img} src={img} alt="" />
            <h2 className={styles.category__title}>{title}</h2>
        </div>
    )
}

export default Category
