import { useEffect, useState } from "react"
import { ProjectsWrapper, ProjectsContainer, ProjectDetails, ProjectCard, ArrowRightIcon, ArrowLeftIcon } from "./styles"
import { Container, Row, SectionHeading } from "../../styles/GlobalStyles"
import { ArrowButton } from "../arrowButton"
import SpaceTourismImage from "../../assets/Space-Tourism.png"
import IpAdressTrackerImage from "../../assets/Ip_adress_tracker.png"
import PortfolioImage from "../../assets/Portfolio.png"
import ProfileSearchImage from "../../assets/Profile-Search-Github-API.png"
import PokedexImage from "../../assets/Pokedex.png"
interface ProjectItem {
    title: string
    img: string
    alt: string
    description: JSX.Element
    link: string
}

const projects: ProjectItem[] = [
    {
        title: "Space Tourism | Website",
        img: SpaceTourismImage,
        alt: "Space tourism Landing Page",
        description: (
            <>
                Desenvolvido utilizando React, Styled Components, Context API e React Router.
                <br /><br />
                É um site com quatro páginas que apresenta o turismo espacial. Fiz este projeto para treinar minhas habilidades com React, escrevendo todo o código sozinho e utilizando um arquivo JSON para carregar as informações dinamicamente.<br /> <br />🔗 Ver no Vercel
            </>
        ),
        link: "https://space-tourism-react-ten.vercel.app",
    },
    {
        title: "IP Address Tracker | Utilizando ipify e leafletjs",
        img: IpAdressTrackerImage,
        alt: "Ip Adress Tracker",
        description: (
            <>
                Este projeto foi um treinamento para aprimorar minhas habilidades em HTML, CSS e JavaScript e consumo de APIs.
                <br /><br />
                Ele permite aos usuários inserir um endereço IP ou nome de domínio para obter um mapa com a localização geográfica usando APIs LeafletJS e ipify.<br /> <br />🔗 Ver no Github Pages
            </>
        ),
        link: "https://gabrielth58.github.io/IP-Address-Tracker/",
    },
    {
        title: "Pokedex | React",
        img: PokedexImage,
        alt: "Pokedex",
        description: (
            <>
                Desenvolvido utilizando React, Styled Components, Context API, React Router e PokeAPI.
                <br /><br />
                É uma aplicação de Pokedex com funcionalidades como listagem de pokemons, carregamento dinâmico de mais pokemons, visualização detalhada 
                de cada pokemon e alternância de tema entre claro e escuro.<br /><br />🔗 Ver no Vercel
            </>
        ),
        link: "https://gco-quest-pokedex.vercel.app",        
    },
    {
        title: "Profile Search | Github API",
        img: ProfileSearchImage,
        alt: "Profile Search Github API",
        description: (
            <>
                Este projeto foi desenvolvido com HTML, CSS e JavaScript, com foco na Programação Orientada a Objetos (POO).
                <br /><br />
                O objetivo do projeto é mostrar uma lista de perfis do GitHub com base em um nome de usuário. Embora a funcionalidade seja simples, o verdadeiro desafio foi aplicar POO para manter o código limpo, organizado e livre de erros.
                <br /><br /> 
                🔗 Ver no Github Pages
            </>
        ),
        link: "https://gabrielth58.github.io/Profile-Search-Github-API/",
    },
    {
        title: "Gabriel Correia | Portfólio",
        img: PortfolioImage,
        alt: "Portfolio",
        description: (
            <>
                Desenvolvido com TypeScript, React e Styled Components, este portfólio demonstra minhas habilidades em front-end.
                <br /><br />
                Utilizei boas práticas, mantendo o código limpo e organizado, e focando na reutilização de elementos para criar um design responsivo e uma estrutura clara, destacando meus projetos.
                Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem valor à minha carreira como Desenvolvedor. <br /> <br /> 🔗 Ver no Vercel
            </>
        ),
        link: "https://gabrielth58.github.io/Portfolio/",
    }
]

export function Projects() {
    const [counter, setCounter] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const currentProject: ProjectItem = projects[counter];
    const isLastProject: boolean = counter === projects.length - 1;
    const isFirstProject: boolean = counter === 0;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    const nextProject = () => {
        if (counter < projects.length - 1) {
            setCounter(prevCounter => prevCounter + 1);
        }
    }

    const previousProject = () => {
        if (counter > 0) {
            setCounter(prevCounter => prevCounter - 1);
        }
    }

    return (
        <ProjectsWrapper id="projects" data-aos="fade-up-left" data-aos-duration="3000">
            <Container>
                <Row>
                    <SectionHeading>
                        <h2>Projetos</h2>
                    </SectionHeading>
                </Row>

                <ProjectsContainer>
                    <ArrowButton onClick={previousProject} isDisabled={isFirstProject}>
                        <ArrowLeftIcon />
                    </ArrowButton>

                    <ProjectCard data-aos="flip-up">
                        <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                            <h3>{currentProject.title}</h3>
                            <img src={currentProject.img} alt={currentProject.alt} />
                            <ProjectDetails isMobile={isMobile}>
                                <p>{currentProject.description}</p>
                            </ProjectDetails>
                        </a>
                    </ProjectCard>

                    <ArrowButton onClick={nextProject} isDisabled={isLastProject}>
                        <ArrowRightIcon />
                    </ArrowButton>
                </ProjectsContainer>
            </Container>
        </ProjectsWrapper>
    );
}
