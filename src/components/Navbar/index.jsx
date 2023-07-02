import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import NavImg from '../../images/logo.png';
import Logoutbtn from '../Logout/Logoutbtn';
import { useSelector } from 'react-redux';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink, NavLogoImg, NavLinkR, NavProfile, NavProfileDropdown } from './NavbarElements';
import { FaUserCircle } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const dropdownRef = useRef(null);
  const currentUser = useSelector((state) => state.user.currentUser);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenProfile(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setOpenProfile((prevOpenProfile) => !prevOpenProfile);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <NavLogoImg src={NavImg} />
              Mech Buddy
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to='contact'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>

              {!currentUser &&(   
              <NavItem>
                <NavLinkR
                  to='/signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </NavLinkR>
              </NavItem>
              )}

            </NavMenu>

            <NavBtn>
              {currentUser ? (
                <NavProfile ref={dropdownRef} >
                <FaUserCircle
                  style={{ fontSize: '40px', cursor: "pointer" }}
                  onClick={handleProfileClick}
                />
                {openProfile && (
                  <NavProfileDropdown>
                    <Logoutbtn style={{ color: 'black' }} />
                  </NavProfileDropdown>
                )}
              </NavProfile>

              ) : (
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
              )}
            </NavBtn>

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
