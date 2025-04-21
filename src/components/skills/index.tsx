import { skills } from '../../data/skills';
import { Container, Row, SectionHeading } from '../../styles/GlobalStyles';
import { SkillsWrapper, SkillInfo, SkillsContainer } from './styles';
import 'devicon/devicon.min.css';


export function Skills() {
    
    return (
        <SkillsWrapper id="skills" data-aos="fade-up-right" data-aos-duration="3000">
            <Container>
                <Row>
                    <SectionHeading>
                        <h2>Habilidades</h2>
                    </SectionHeading>
                </Row>
            </Container>

            <SkillsContainer>
                {skills.map(skill => (
                    <SkillInfo key={skill.name}>
                        <div>
                            <i className={skill.icon}></i>
                        </div>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </SkillInfo>
                ))}                
            </SkillsContainer>
        </SkillsWrapper>
    );
}
