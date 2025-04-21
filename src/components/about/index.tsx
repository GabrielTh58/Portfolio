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
                            <strong>Olá! Me chamo Gabriel Correia e sou um desenvolvedor front-end em constante evolução.</strong>
                            Sou Estudante de Engenharia de Software pela Uninter e venho me aprofundando no desenvolvimento web, sempre buscando aprender,
                            evoluir e transformar ideias em soluções bem construídas.
                        </p>
                        <p>
                            Meu objetivo é conquistar minha primeira oportunidade na área e contribuir com projetos que impactem positivamente a vida das pessoas.
                            Acredito que a tecnologia deve ser acessível, útil e feita com atenção aos detalhes
                        </p>
                        <p>
                            Como empreendedor no ramo de Estetica Automotiva, desenvolvi habilidades que complementam minha formação técnica — como organização,
                            proatividade, boa comunicação e foco em resultados. Sou curioso, autodidata e tenho facilidade para trabalhar em equipe.
                        </p>
                        <p>                            
                            Estou sempre em busca de crescimento pessoal e profissional, e acredito que cada projeto é uma chance de aprender algo novo e fazer a diferença.
                        </p>


                        <ResumeButton />
                    </AboutInfo>
                </Row>
            </ContainerWithSection>
        </AboutWrapper>
    )
}
