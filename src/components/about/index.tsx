import { ContainerWithSection, Row, SectionHeading } from '../../styles/GlobalStyles';
import { ResumeButton } from '../resume-button';
import { ProfileImage } from '../profile-image';
import { AboutWrapper, ProfileImageWrapper, ImageContainer, AboutInfo } from './styles';

export function About() {
    return (
        <AboutWrapper id="about-me" data-aos="fade-up-left" data-aos-duration="3000">
            <ContainerWithSection>
                <Row>
                    <SectionHeading>
                        <h2>Sobre</h2>
                    </SectionHeading>
                </Row>

                <Row>
                    <ProfileImageWrapper>
                        <ImageContainer>
                            <ProfileImage />
                        </ImageContainer>
                    </ProfileImageWrapper>

                    <AboutInfo>
                        <p>
                            <strong>Olá! Me chamo Gabriel Correia e sou um desenvolvedor front-end em formação!</strong>
                            Sou estudante de Engenharia de Software e também empreendedor. No momento, estou fazendo a transição para a carreira de desenvolvimento Front-End. 
                        </p>
                        <p>
                            Atualmente, estou aprofundando meus conhecimentos em tecnologias como React, Next.js e Node.js, sempre em busca de novos desafios para aplicar e expandir minhas habilidades.
                        </p>
                        
                        <ResumeButton />
                    </AboutInfo>
                </Row>
            </ContainerWithSection>
        </AboutWrapper>
    )
}
