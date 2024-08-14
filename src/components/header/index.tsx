import { Container } from '../../styles/GlobalStyles';
import { NavigationMenu } from '../navigationMenu';
import { HeaderWrapper, MenuHeader, Logo } from './styles';

export function Header() {
    return (
        <HeaderWrapper data-aos="zoom-in-left" data-aos-duration="3000">
            <Container>
                <MenuHeader>
                    <a href="#home">
                        <Logo>GC</Logo>
                    </a>

                  <NavigationMenu />
                </MenuHeader>
            </Container>
        </HeaderWrapper>
    )
}

