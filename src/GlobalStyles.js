import { createGlobalStyle } from 'styled-components';

// Fonts
import ExoRegular from "assets/fonts/Exo-Regular.ttf";

const GlobalStyles = createGlobalStyle`

    :root {
        --overallBackground: #fff;
        --grey: #343A41;
        --yellow: #E5E16B;
    }
    @font-face {
        font-family: 'ExoRegular';
        src: url(${ExoRegular}) format('truetype')
    }

    body {
        margin: 0;
        padding: 0;
        /* min-width: 1024px; */
        margin: auto;
        background: var(--overallBackground);
        font-family: ExoRegular;
        font-weight: 500;
        overflow: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
  
`;

export default GlobalStyles;