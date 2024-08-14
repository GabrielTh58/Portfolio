import { SocialMediaLink } from "../social-media-link";
import { FooterWrapper, ContainerFooter} from "./styles"

export function Footer() {
    return (
        <FooterWrapper data-aos="fade-up-left" data-aos-duration="3000">
            <ContainerFooter className="container">
                <h2>Me envie uma mensagem!</h2>

                <SocialMediaLink justify="center"/>
            </ContainerFooter>
        </FooterWrapper>
    )
}