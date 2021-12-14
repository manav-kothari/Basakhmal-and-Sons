import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  &:hover {
    color: #fbbc04;
    transition: all 0.3s ease;
  }
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
    margin: 0;
    padding: 1.2rem 0;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 15vh;
  }
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  /* margin-top: 0.4rem; */
  height: 100%;
  &:hover {
    color: #4285f4;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    font-size: 2.2rem;
    text-align: center;
    width: 100%;
    display: table;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;

    &:hover {
      color: #34a853;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px 16px;
  height: 100%;
  width: 100%;
  /* margin-top: 0.8rem; */

  color: inherit;
  border: none;
  outline: none;
`;
