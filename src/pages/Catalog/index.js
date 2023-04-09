import { StyledCatalog } from "./styles/Catalog.styled";
import { Link, useParams } from "react-router-dom";
import { cardsData } from "../../API/cards_api";
import Card from "../../components/Card";

function Catalog() {
    const { category } = useParams();
    const cards = cardsData().filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <StyledCatalog>
            <Link to={"/"}>Back</Link>
            <h1>Catalog</h1>
            {cards?.map((item, index) => (
                <Card 
                    key={index}
                    img={item.img}
                    category={item.category}
                    title={item.title}
                    count={item.availability}
                />
            ))}
        </StyledCatalog>
    );
}

export default Catalog;
