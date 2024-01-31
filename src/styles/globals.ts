import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.body_text};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'General Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    /* Short-hand -> font: 400 1rem Roboto, sans-serif */
}

@media screen and (max-width: 400px){
    body, input, textarea, button{
        font-size: 85%;
    }
}

@media screen and (min-width: 400px) and (max-width: 760px){
    body, input, textarea, button{
        font-size: 90%;
    }
}

h1 {
    font-size: 62px;
}
h2 {
    font-size: 42px;
}
h3 {
    font-size: 36px;
}
h4 {
    font-size: 24px;
}
`
