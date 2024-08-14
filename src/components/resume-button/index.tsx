import { CvButton } from "./style"
import Cv from "../../assets/cv.pdf"
export const ResumeButton = () => {
    return (
        <CvButton>
            <a target="_blank" href={Cv}>Veja meu CV</a>
        </CvButton>
    )
}