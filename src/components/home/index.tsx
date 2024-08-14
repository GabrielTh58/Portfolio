import { HomeWrapper, HomeText, HomeImg, ImageBox } from './styles';
import { Container, VerticalAlignRow } from '../../styles/GlobalStyles';
import { SocialMediaLink } from '../social-media-link';
import { ProfileImage } from '../profile-image';
export function Home() {
    return (
        <HomeWrapper id="home" data-aos="zoom-in-left" data-aos-duration="3000">
            <Container>
                <VerticalAlignRow>
                    <HomeText>
                        <p>Olá 🖖,</p>
                        <h1>Sou o Gabriel Correia</h1>
                        <h2>Desenvolvedor Frontend</h2>

                        <SocialMediaLink />                       
                    </HomeText>

                    <HomeImg>
                        <ImageBox>
                            <ProfileImage />
                        </ImageBox>
                    </HomeImg>
                </VerticalAlignRow>
            </Container>
        </HomeWrapper>
    )
}
