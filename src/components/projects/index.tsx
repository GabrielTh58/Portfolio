import { useEffect, useState } from "react"
import { ProjectsWrapper, ProjectsContainer, ProjectDetails, ProjectCard, ArrowRightIcon, ArrowLeftIcon } from "./styles"
import { Container, Row, SectionHeading } from "../../styles/GlobalStyles"
import { ArrowButton } from "../arrowButton"
import { ProjectItem } from "../../interfaces/projects"
import { projects } from "../../data/projects"



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
                                {currentProject.description}
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
