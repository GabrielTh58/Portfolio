import { useEffect, useState } from "react";
import { ProjectsWrapper, ProjectsContainer, ProjectDetails, ProjectCard, ArrowRightIcon, ArrowLeftIcon } from "./styles";
import { Container, Row, SectionHeading } from "../../styles/GlobalStyles";
import { ArrowButton } from "../arrowButton";
interface ProjectItem {
    title: string;
    img: string;
    alt: string;
    description: JSX.Element;
    link: string;
}

const projects: ProjectItem[] = [
    {
        title: "Space Tourism | Website",
        img: "./src/assets/Space-Tourism.png",
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
        img: "./src/assets/Ip_adress_tracker.png",
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
        title: "Profile Search | Github API",
        img: "./src/assets/Profile-Search-Github-API.png",
        alt: "Profile Search Github API",
        description: (
            <>
                Este projeto foi desenvolvido com HTML, CSS e JavaScript, utilizando POO.
                <br /><br />
                O objetivo é mostrar uma lista de perfis do GitHub com base em um nome de usuário.
                Apesar de sua funcionalidade ser simples, implementá-la evitando erros e tornando o código o mais limpo possível foi o verdadeiro desafio.<br /><br /> 🔗 Ver no Github Pages
            </>
        ),
        link: "https://gabrielth58.github.io/Profile-Search-Github-API/",
    },
    {
        title: "Gabriel Correia | Portfólio",
        img: "./src/assets/Portfolio.png",
        alt: "Grid Landing Page",
        description: (
            <>
                Construído com HTML e CSS puro, demonstra minhas habilidades em desenvolvimento front-end.
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
