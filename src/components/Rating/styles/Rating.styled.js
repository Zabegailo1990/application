import styled from "styled-components";

export const StyledRating = styled.ul`
   display: flex;
   width: fit-content;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    &:not(:last-child){
        margin-right: 1px;
    }
`