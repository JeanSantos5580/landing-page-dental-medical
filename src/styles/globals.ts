import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.sky_blue};
    border-radius: 3px
}

body{
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.body_text};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button, small, a{
    font-family: 'General Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    /* Short-hand -> font: 400 1rem Roboto, sans-serif */
}

h1 {
    font-size: 3.875rem;
}
h2 {
    font-size: 2.625rem;
}
h3 {
    font-size: 2.25rem;
}
h4 {
    font-size: 1.5rem;
}

@media screen and (max-width: 400px){
    body, input, textarea, button, small{
        font-size: 85%;
    }

    h1, h3, h4{
        font-size: 90%;
    }

    h2{
        font-size: 120%;
    }
}

@media screen and (min-width: 400px) and (max-width: 880px){
    body, input, textarea, button, small{
        font-size: 90%;
    }
    h1, h3, h4{
        font-size: 120%;
    }
    h2{
        font-size: 200%;
    }
}
`
