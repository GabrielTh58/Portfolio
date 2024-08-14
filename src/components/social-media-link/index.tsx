import { SocialLinksContainer } from './styles';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

interface SocialMediaLinkProps {
    justify?: string
}
export const SocialMediaLink = (props : SocialMediaLinkProps) => {
    return (
        <SocialLinksContainer $justify={props.justify}>
            <a href="https://www.linkedin.com/in/gabrielcorreia-dev/" target='_blank'>
                <FaLinkedinIn />
            </a>

            <a href="https://wa.me/5541995667727" target='_blank'>
                <FaWhatsapp />
            </a>

            <a href="https://github.com/GabrielTh58" target='_blank'>
                <FaGithub />
            </a>
        </SocialLinksContainer>
    )
}