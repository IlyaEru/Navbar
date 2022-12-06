import styled from 'styled-components';
import { StyledButton } from '../../Style/globalStyle';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.lightShadow};
`;

export const StyledNav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  img {
    height: 40px;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 0.5rem;
`;

export const StyledSocialList = styled(StyledNavList)``;
export const StyledNavLink = styled.li`
  a {
    font-weight: 400;
    color: ${(props) => props.theme.colors.primaryDarkBlue};
    text-transform: capitalize;
    letter-spacing: ${(props) => props.theme.letterSpacing};
    transition: ${(props) => props.theme.transition};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.primaryBlue};
    }
  }
`;

export const StyledSocialLink = styled.li`
  a {
    color: ${(props) => props.theme.colors.primaryBlue};
    transition: ${(props) => props.theme.transition};
    &:hover {
      color: ${(props) => props.theme.colors.primaryDarkBlue};
    }
  }
`;

export const StyledHamburgerButton = styled(StyledButton)`
  padding: 0;
  background: none;
  font-size: 1.5rem;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    transform: rotate(90deg);
  }
`;

export const StyledExtendedHeaderLinks = styled(StyledNavList)`
  max-height: 0;

  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  transition: max-height 0.5s ease-out;
  &.extended {
    max-height: 500px;
  }
  li {
    transition: ${(props) => props.theme.transition};
    padding: 0.5rem 1rem;
    width: 100%;
    &:hover {
      padding-left: 1.5rem;
      background-color: ${(props) => props.theme.colors.primaryLightBlue};
    }
  }
`;
