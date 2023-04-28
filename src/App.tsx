import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Sobre from "./containers/Sobre"
import Sidebar from "./containers/Sidebar"
import EstiloGlobal, { Container } from "./styles"
import Projetos from "./containers/Projetos"
import temaLight from './themes/light'
import temaDark from './themes/dark'


function App() {
  const [tema, setTema] = useState(false)

  const trocaTema = () => {
    setTema(!tema)
  }

  return (
    <ThemeProvider theme={tema ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
