import { ThemeProvider } from 'styled-components'
import { themes } from './styles/theme'
import { GlobalStyle } from './styles/globals'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
