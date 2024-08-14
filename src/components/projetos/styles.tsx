import styled from "styled-components";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IconBase, DefaultShadowEffect} from "../../styles/GlobalStyles";

interface ProjectDetailsProps {
    isMobile: boolean;
}

export const ProjectsWrapper = styled.section`
    width: 100vw;
`

export const ProjectsContainer = styled.div`        
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media(max-width: 1280px) { 
        padding: 0 var(--mobile-padding);
    }
`

export const ProjectDetails = styled.div<ProjectDetailsProps>`
    padding: 20px 20px;    
    background-color: var(--dark-background-color);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;    
    transition: all .3s ease-in-out;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    &:nth-child(2){
        font-weight: 500;
        margin-top: 10px;
        font-size: 1.4rem;
    }

    p{
      display: ${(props) => (props.isMobile ? "none" : "block")};
    }

`

export const ProjectCard = styled.div`
    border-radius: 5px;
    transition: all 0.s ease-in-out;
    position: relative;   
    width: 100%;
    
    img{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }

    h3{
        font-size: 2rem;
        font-weight: 500;    
        position: absolute;      
        opacity: 0.7;
        background-color: var(--dark-background-color);
        width: 100%;
        padding-left: 20px;
        padding-bottom: 10px;
        padding-top: 10px;
        bottom: 0;
    }
    
    &:hover{
       box-shadow: ${DefaultShadowEffect};
    }    

    &:hover ${ProjectDetails} {
        opacity: 0.8;
    }
`

export const ArrowRightIcon = styled(FaAngleRight)`
  ${IconBase}
`

export const ArrowLeftIcon = styled(FaAngleLeft)`
  ${IconBase}
`
