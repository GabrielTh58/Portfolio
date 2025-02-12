import { Container, Row, SectionHeading } from '../../styles/GlobalStyles';
import { SkillsWrapper, SkillInfo, SkillsContainer } from './styles';
import 'devicon/devicon.min.css';

interface SkillItem {
    name: string;
    icon: string;
    description: string;
}

export function Skills() {
    const skills : SkillItem[] = [
        {
            name: 'Javascript',
            icon: 'devicon-javascript-plain',
            description: 'Desenvolvimento de aplicações web dinâmicas, integração com APIs e otimização da experiência do usuário'
        },
        {
            name: 'Typescript',
            icon: 'devicon-typescript-plain',
            description: 'Adição de tipagem estática ao JavaScript para melhorar a robustez e manutenção do código'
        },
        {
            name: 'React',
            icon: 'devicon-react-plain',
            description: 'Construção de interfaces de usuário reutilizáveis e gerenciamento de estado com hooks e context API'
        },
        {
            name: 'Next.js',
            icon: 'devicon-nextjs-plain',
            description: 'Framework React para desenvolvimento de aplicações web rápidas, com renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).'
        },
        {
            name: 'Wordpress',
            icon: 'devicon-wordpress-plain',
            description: 'Criação de sites Wordpress com estrutura de arquitetura e design responsivo'
        },
        {
            name: 'Html',
            icon: 'devicon-html5-plain-wordmark',
            description: 'Criação de estruturas semânticas e acessíveis'
        },
        {
            name: 'CSS',
            icon: 'devicon-css3-plain-wordmark',
            description: 'Desenvolvimento de layouts responsivos e estilização avançada utilizando Tailwind CSS, além de técnicas como Flexbox e Grid'
        },
        {
            name: 'GitHub',
            icon: 'devicon-github-original',
            description: 'Plataforma de hospedagem para projetos Git, facilitando a colaboração e o versionamento de código'
        },
        {
            name: 'Git',
            icon: 'devicon-git-plain',
            description: 'Controle de versão com gerenciamento de branches, commits e merge para colaboração eficiente em projetos'
        },
    ]

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
