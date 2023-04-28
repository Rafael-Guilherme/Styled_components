import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo='secundario'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem nulla temporibus laudantium at deleniti ea asperiores, neque illo officiis a saepe iusto dolor voluptatum beatae error dignissimos repellat! Repellendus?
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=Rafael_Guilherme&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rafael_Guilherme&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
