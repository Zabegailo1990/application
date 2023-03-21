import { StyledSidebar, Item } from './styles/Sidebar.styled'
import Range from '../../components/Range'

function Sidebar() {
    return (
        <StyledSidebar>
            <Range 
                initialMin={0}
                initialMax={1000}
                min={0}
                max={10000}
                step={100}
                priceCap={1000}
            />
        </StyledSidebar>
    )
}

export default Sidebar
