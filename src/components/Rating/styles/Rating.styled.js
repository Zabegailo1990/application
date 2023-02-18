import styled from "styled-components";

export const StyledRating = styled.ul`
   display: flex;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-right: 1px;
    }
`