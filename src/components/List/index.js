import styles from './scss/list.module.scss'

function List({ header, name, footer, img }) {
    return (
        <div className={styles.list}>
            {img && <img className={styles.img} src={img} alt="" />}
            {header && (
                <div className={styles.header}>
                    {header.map((item, index) => (
                        <div className={styles.item} key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
            {(name || footer) && (
                <div className={styles.column}>
                    {name && <h2 className={styles.name}>{name}</h2>}
                    {footer && <div className={styles.footer}>{footer}</div>}
                </div>
            )}
        </div>
    )
}

export default List
