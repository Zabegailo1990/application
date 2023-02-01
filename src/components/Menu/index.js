import { StyledMenu, List, Item } from './styles/Menu.styled'
import Icon from '../Icon'
import { useState } from 'react'

const menu_api = [
    {
        id: '1',
        name: 'item_1',
        path: '#',
    },
    {
        id: '2',
        name: 'item_2',
        path: '#',
    },
    {
        id: '3',
        name: 'item_3',
        path: '#',
    },
    {
        id: '4',
        name: 'Item_4',
        list: [
            {
                id: '4.1',
                name: 'SubItem_1',
                path: '#',
            },
            {
                id: '4.2',
                name: 'SubItem_2',
                path: '#',
            },
            {
                id: '4.3',
                name: 'SubItem_3',
                list: [
                    {
                        id: '4.3.1',
                        name: 'SubItem_1',
                        path: '#',
                    },
                    {
                        id: '4.3.2',
                        name: 'SubItem_2',
                        path: '#',
                    },
                    {
                        id: '4.3.3',
                        name: 'SubItem_3',
                        path: '#',
                    },
                ],
            },
        ],
    },
    {
        id: '5',
        name: 'item_5',
        path: '#',
    },
    {
        id: '6',
        name: 'item_6',
        list: [
            {
                id: '6.1',
                name: 'SubItem_1',
                path: '#',
            },
            {
                id: '6.2',
                name: 'SubItem_2',
                path: '#',
            },
            {
                id: '6.3',
                name: 'SubItem_3',
                path: '#',
            },
        ],
    },
]

function Menu() {
    const [menu, setMenu] = useState(menu_api)
    const [name, setName] = useState()

    console.log(menu)
    console.log(name)

    // Рекурсивно добавляет флаг в объекты которые содержат массив List
    function setFlag(arr) {
        return arr.map((item) => {
            if (item.list) {
                item.flag = false
                setFlag(item.list)
                return item
            } else {
                return item
            }
        })
    }

    function activeList(id, event) {
        setName(id)
        event.stopPropagation()
        setMenu(
            menu.map((item) => {
                if (item.id === id) {
                    return { ...item, flag: (!item.flag) }
                } else {
                    return item
                }
            })
        )
    }

    function showList () {

    }

    // Рекурсивно рендерит меню из вывода функции setFlag
    function renderMenu(arr) {
        return (
            <List>
                {arr.map((item) => (
                    <Item
                        key={item.id}
                        onClick={(event) => activeList(item.name, event)}
                    >
                        {item.name}
                        {item.list && <Icon iconName={'icon-next'} />}
                        {item.name === name && renderMenu(item.list)}
                    </Item>
                ))}
            </List>
        )
    }

    return <StyledMenu>{renderMenu(menu)}</StyledMenu>
}

export default Menu
