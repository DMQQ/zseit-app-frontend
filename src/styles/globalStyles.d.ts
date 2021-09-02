import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
        *,
        *::after,
        *::before{
            margin: 0;
            box-sizing: border-box;
            font-family: sans-serif;
            padding: 0;
        }
`;

export default GlobalStyles;
