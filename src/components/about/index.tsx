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
                            Sou estudante de Engenharia de Software e sempre fui autodidata em várias áreas. No momento, estou focado em aprimorar minhas
                             habilidades em programação front-end e iniciando minha jornada como freelancer.
                        </p>
                        <p>
                            Minha experiência como empreendedor no ramo de estética automotiva me proporcionou habilidades valiosas em gestão, resolução de problemas e trabalho em equipe.
                             Essas competências complementam meu trabalho como programador e me ajudam a abordar desafios técnicos com uma perspectiva prática.
                        </p>
                        <p>
                            Atualmente, estou estudando tecnologias como HTML, CSS, JavaScript, TypeScript, React, Wordpress, NodeJS, Express e Jest.
                            Meu objetivo é me tornar um profissional competente e relevante na área de tecnologia.
                        </p>
                        
                        <ResumeButton />
                    </AboutInfo>
                </Row>
            </ContainerWithSection>
        </AboutWrapper>
    )
}
