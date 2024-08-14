import styled from 'styled-components';
import { Row, Section } from '../../styles/GlobalStyles';

export const SkillsWrapper = styled(Section)`
  width: 100vw;
`

export const SkillsContainer = styled(Row)` 
  text-align: center;
  justify-content: center;
  flex-direction: row;
`

export const SkillInfo = styled.div`
  max-width: 350px;
  padding: 40px 20px;
  transition: all 0.3s ease;  

  &:hover {
    i,
    h3,
    p{
      color: var(--primary-color);
    }
  }

  h3 {
    font-size: var(--extra-large-font-size);
    font-weight: 500;
    margin-bottom: 20px;
    color: var(--primary-color);
  }

  p {
    font-size: 1.8rem;
    font-family: var(--secondary-color);
  }

  i {
    font-size: 8rem;   
  }
`
