import SpaceTourismImage from "../assets/Space-Tourism.png"
import IpAdressTrackerImage from "../assets/Ip_adress_tracker.png"
import PortfolioImage from "../assets/Portfolio.png"
import ProfileSearchImage from "../assets/Profile-Search-Github-API.png"
import PokedexImage from "../assets/Pokedex.png"
import FynanceHubImage from "../assets/preview_fynancehub.png"
import { ProjectItem } from "../interfaces/projects"


export const projects: ProjectItem[] = [
  {
    title: 'Fynance Hub | Full Stack',
    img: FynanceHubImage,
    alt: "Imagem do Projeto Fynance Hub",
    description: (
      <p>
        Desenvolvido com React, React Hook Form, Zod, shadcn/ui, Next, Tailwind, TypeScript, Node, Express, Postgres, Prisma, autenticaão com JWT, Bcrypt.
        <br /> <br />
        Aplicação full stack criada para facilitar o controle financeiro do meu trabalho como autônomo. A plataforma permite o gerenciamento
        de receitas e despesas, exibição de gráficos interativos e geração de relatórios em PDF no fim de cada mês — tudo de forma simples, responsiva e segura.
        <br /><br />
        🔗 Ver no Vercel
      </p>
    ),
    link: "https://fynance-hub.vercel.app/login",
  },
  {
    title: "Space Tourism | Website",
    img: SpaceTourismImage,
    alt: "Space tourism Landing Page",
    description: (
      <p>
        Website institucional com quatro páginas, desenvolvido com React, Styled Components, Context API e React Router.
        <br /><br />
        Criado como parte de um desafio do Frontend Mentor, o projeto explora o tema de turismo espacial, com foco em uma navegação fluida, layout responsivo e boa organização de componentes.
        <br /> <br />
        🔗 Ver no Vercel
      </p>

    ),
    link: "https://space-tourism-react-ten.vercel.app",
  },
  {
    title: "Gabriel Correia | Portfólio",
    img: PortfolioImage,
    alt: "Portfolio",
    description: (
      <p>
        Meu portfólio pessoal, construído com TypeScript, React, Styled Components e AOS Animate para animações.
        <br /> <br />
        Apresenta meus principais projetos de forma clara e organizada, com foco em acessibilidade, simplicidade e responsividade.
        <br /> <br />
        Utilizei boas práticas, mantendo o código limpo e organizado, e focando
        na reutilização de elementos para criar um design responsivo e uma
        estrutura clara, destacando meus projetos. Continuarei atualizando-o com
        novos projetos cada vez mais complexos e que agreguem valor à minha
        carreira como Desenvolvedor.
        <br /> <br />
        🔗 Ver no Vercel
      </p>
    ),
    link: "https://gabrielth58.github.io/Portfolio/",
  },
  {
    title: "IP Address Tracker | Utilizando ipify e leafletjs",
    img: IpAdressTrackerImage,
    alt: "Ip Adress Tracker",
    description: (
      <p>
        Projeto feito com HTML, CSS e JavaScript puro, integrando as APIs ipify e LeafletJS.
        <br /><br />
        O usuário pode inserir um IP ou domínio para obter sua localização geográfica no mapa.
        <br /><br />
        Exercício prático voltado para consumo de API, manipulação do DOM e exibição dinâmica de dados.
        <br /><br />
        🔗 Ver no GitHub Pages
      </p>
    ),
    link: "https://gabrielth58.github.io/IP-Address-Tracker/",
  },
  {
    title: "Pokedex | React",
    img: PokedexImage,
    alt: "Pokedex",
    description: (
      <p>
        Desenvolvido utilizando React, Styled Components, Context API, React
        Router e integração com PokeAPI.
        <br /> <br />
        Conta com listagem paginada de Pokémons, visualização de detalhes, Filtros, alternância de tema (claro/escuro) e responsividade.
        <br /> <br />
        Projeto desafiador que me ajudou a aplicar boas práticas de arquitetura de componentes e organização de pastas
        <br /><br />
        🔗 Ver no Vercel
      </p>
    ),
    link: "https://gco-quest-pokedex.vercel.app",
  },
  {
    title: "Profile Search | Github API",
    img: ProfileSearchImage,
    alt: "Profile Search Github API",
    description: (
      <p>
        Este projeto foi desenvolvido com HTML, CSS e JavaScript, integração com a API do GitHub, com foco na
        Programação Orientada a Objetos (POO).
        <br /> <br />
        Permite buscar e exibir perfis do GitHub com base no nome de usuário.
        <br /><br />
        Desafio foi aplicar POO para manter o código limpo, organizado e livre de erros.
        🔗 Ver no Github Pages
      </p>
    ),
    link: "https://gabrielth58.github.io/Profile-Search-Github-API/",
  }, 
]
