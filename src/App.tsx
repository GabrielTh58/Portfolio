import { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from './components/header'
import { Home } from './components/home'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Footer } from './components/footer'
import { Projects } from './components/projetos'
function App() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  return (
    <Wrapper>
      <Header />   
      <Home />
      <About />    
      <Skills />
      <Projects />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1440px;
`

export default App
