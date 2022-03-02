import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html,
body {
    margin: 0;
    padding: 0;
  font-family: roboto;
}

* {
    box-sizing: border-box;
    margin: 0;
}

*::before,
*::after {
    box-sizing: inherit;

}




`;
