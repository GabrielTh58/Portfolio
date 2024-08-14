import styled from "styled-components";

export const Navigation = styled.nav`
  @media (max-width: 900px) {
    input:checked ~ ul {
      display: block;
    }

    ul {
      display: none;
      background-color: var(--dark-background-color);
      padding: 20px;
    }

    li a {
      color: var(--white-color);
      text-align: center;
      padding: 20px;
      display: block;
    }
  }
`

export const Hamburger = styled.span`
  display: block;
  background-color: var(--white-color);
  width: 30px;
  height: 2px;
  position: relative;
  top: 29px;
  left: 15px;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    background-color: var(--white-color);
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.2s ease-in-out;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }
`

export const MenuToggle = styled.input`
  display: none;

  &:checked ~ label ${Hamburger} {
    transform: rotate(45deg);
  }

  &:checked ~ label ${Hamburger}:before {
    transform: rotate(90deg);
    top: 0;
  }

  &:checked ~ label ${Hamburger}:after {
    transform: rotate(90deg);
    bottom: 0;
  }
`

export const MenuLabel = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

export const Menu = styled.div`
  width: 60px;
  height: 60px;
  display: none;
  align-self: flex-end;

  @media (max-width: 900px) {
    display: block;
  }
`

export const MenuList = styled.ul`
  display: flex;
  gap: 1rem;
`

export const MenuLink = styled.a`
  text-transform: capitalize;
  color: var(--white-color);
  font-size: 2rem;
  font-weight: 500;
  padding: 10px 20px;
  transition: 0.2s;
  border-radius: 50px;
  letter-spacing: 1px;
  user-select: none;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 21, 147, 0.7), 0 0 10px rgba(0, 61, 153, 0.5), 0 0 15px rgba(0, 183, 255, 0.4); 
  }
`