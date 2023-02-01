import styles from './scss/list.module.scss'
import { StyledList, Item, Img, Header } from './styles/List.styled'

function List({ header, name, footer, img }) {
    return (
        <StyledList>
            <Item>
                {img && <Img src={img} alt="" />}
                {header && (
                    <Header>
                        {header.map((item, index) => (
                            <div className={styles.item} key={index}>
                                {item}
                            </div>
                        ))}
                    </Header>
                )}
                {(name || footer) && (
                    <div className={styles.column}>
                        {name && <h2 className={styles.name}>{name}</h2>}
                        {footer && (
                            <div className={styles.footer}>{footer}</div>
                        )}
                    </div>
                )}
            </Item>
        </StyledList>
    )
}

export default List
