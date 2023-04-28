import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Rafael Guilherme</Titulo>
        <Paragrafo tipo="secundario" font-Size={16}>Rafael Guilherme</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Desenvolvedor Front-end
        </Descricao>
        <BotaTema onClick={props.trocaTema}>Trocar tema</BotaTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
