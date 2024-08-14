import { Navigation, MenuToggle, MenuLabel, Menu, Hamburger, MenuList, MenuLink } from './styles';

export const NavigationMenu = () => {
    return (
        <Navigation>
            <MenuToggle type="checkbox" id="menu-hamburguer" />
            <MenuLabel htmlFor="menu-hamburguer">
                <Menu>
                    <Hamburger className="hamburguer" />
                </Menu>
            </MenuLabel>

            <MenuList>
                <li>
                    <MenuLink href="#about-me">Sobre mim</MenuLink>
                </li>
                <li>
                    <MenuLink href="#skills">Habilidades</MenuLink>
                </li>
                <li>
                    <MenuLink href="#projects">Meus projetos</MenuLink>
                </li>
            </MenuList>
        </Navigation>
    )
}