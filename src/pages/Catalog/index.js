import { StyledCatalog } from './styles/Catalog.styled'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

function Catalog() {
    return (
        <StyledCatalog>
            <Link to={'/'}>Back</Link>
            <h1>Catalog</h1>
            <Sidebar />
        </StyledCatalog>
    )
}

export default Catalog
