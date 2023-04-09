import { StyledNewMenu, List, Item } from "./styles/NewMenu.styled";

const menu_api = [
    {
        name: "item_1",
        path: "#",
    },
    {
        name: "item_2",
        path: "#",
    },
    {
        name: "item_3",
        path: "#",
    },
    {
        name: "Item_4",
        list: [
            {
                name: "SubItem_5",
            },
            {
                name: "SubItem_6",
                path: "#",
            },
            {
                name: "SubItem_7",
                list: [
                    {
                        name: "SubItem_8",
                        path: "#",
                    },
                    {
                        name: "SubItem_9",
                        path: "#",
                    },
                    {
                        name: "SubItem_10",
                        path: "#",
                    },
                ],
            },
        ],
    },
    {
        name: "item_11",
        path: "#",
    },
    {
        name: "item_12",
        list: [
            {
                name: "SubItem_13",
                path: "#",
            },
            {
                name: "SubItem_14",
                path: "#",
            },
            {
                name: "SubItem_15",
                path: "#",
            },
        ],
    },
];

function NewMenu() {
    return (
        <StyledNewMenu>
            {menu_api.map((item, index) => (
                <List key={index}>
                    <Item>{item.name}</Item>
                    {item.list && <NewMenu />}
                </List>
            ))}
        </StyledNewMenu>
    );
}

export default NewMenu;
