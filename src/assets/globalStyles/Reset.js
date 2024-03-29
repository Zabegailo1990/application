import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', 'Montserrat', sans-serif;
        margin: 0;
    }

    h1,
    h2,
    h3 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    button {
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    input {
        margin: 0;
        font-size: inherit;
    }
`

export default Reset
