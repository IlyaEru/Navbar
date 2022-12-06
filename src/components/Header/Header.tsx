import {
  StyledExtendedHeaderLinks,
  StyledHamburgerButton,
  StyledHeader,
  StyledNav,
  StyledNavLink,
  StyledNavList,
  StyledSocialLink,
  StyledSocialList,
} from './Header.style';
import logo from '../../assets/logo.svg';
import { links, social } from '../../data';
import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerWidth, setHeaderWidth] = useState(0);
  const [isExtendedNavbar, setIsExtendedNavbar] = useState(false);

  const updateHeaderWidth = () => {
    if (headerRef.current) {
      setHeaderWidth(headerRef.current.clientWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateHeaderWidth);
    const node = headerRef.current;
    if (node) {
      setHeaderWidth(node.clientWidth);
    }
    return () => window.removeEventListener('resize', updateHeaderWidth);
  }, []);

  const extendedHeader = (
    <>
      <StyledNavList>
        {links.map((link) => (
          <StyledNavLink key={link.id}>
            <a href={link.url}>{link.text}</a>
          </StyledNavLink>
        ))}
      </StyledNavList>
      <StyledSocialList>
        {social.map((link) => (
          <StyledSocialLink key={link.id}>
            <a href={link.url}>{link.icon}</a>
          </StyledSocialLink>
        ))}
      </StyledSocialList>
    </>
  );

  return (
    <StyledHeader
      className={isExtendedNavbar ? 'extended' : ''}
      ref={headerRef}
    >
      <StyledNav>
        <>
          <img src={logo} alt="logo" />
          {headerWidth > 800 && extendedHeader}
          {headerWidth <= 800 && (
            <StyledHamburgerButton
              onClick={() => {
                setIsExtendedNavbar(!isExtendedNavbar);
              }}
            >
              <FaBars />
            </StyledHamburgerButton>
          )}
        </>
      </StyledNav>
      <StyledExtendedHeaderLinks className={isExtendedNavbar ? 'extended' : ''}>
        {links.map((link) => (
          <StyledNavLink key={link.id}>
            <a href={link.url}>{link.text}</a>
          </StyledNavLink>
        ))}
      </StyledExtendedHeaderLinks>
    </StyledHeader>
  );
}
