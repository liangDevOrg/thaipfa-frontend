"use client";
import { useState, useEffect } from "react";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import PropTypes from "prop-types";
import { Bounded } from "./Bounded";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export function Header({ menu, settings }) {

  const [openMobileMenu,setOpenMobileMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
      if (screenSize.width > 1199) {
        setOpenMobileMenu(false);
      }
    }
    window.addEventListener('resize', updateDimension);
    return(() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  function getCurrentDimension(){
    if (typeof window === "undefined") {
      return {
        width: 0,
        height: 0
      } 
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  function handleOpenMobileMenu() {
    setOpenMobileMenu(true);
  }

  function handleCloseMobileMenu() {
    setOpenMobileMenu(false);
  }

  return (
    <>
      <div className={`menu-mobile ${openMobileMenu ? 'open' : ''}`}>
        <div className="menu-close">
          <button onClick={handleCloseMobileMenu}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <Accordion className="menu-header" open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            {menu.data.menu_name} <i className="fa fa-caret-down"></i>
          </AccordionHeader>
          <AccordionBody className="menu-body">
            {menu.data.group_menu.map((item, index) => (
              <div className="menu-item" key={index}>
                <a href="#">{item.submenu_name}</a>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
        <Accordion className="menu-header" open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            {menu.data.menu_name2} <i className="fa fa-caret-down"></i>
          </AccordionHeader>
          <AccordionBody className="menu-body">
            {menu.data.group_menu2.map((item, index) => (
              <div className="menu-item" key={index}>
                <a href="#">{item.submenu_name}</a>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
        <Accordion className="menu-header" open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            {menu.data.menu_name3} <i className="fa fa-caret-down"></i>
          </AccordionHeader>
          <AccordionBody className="menu-body">
            {menu.data.group_menu3.map((item, index) => (
              <div className="menu-item" key={index}>
                <a href="#">{item.submenu_name}</a>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
        <Accordion className="menu-header" open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            {menu.data.menu_name4} <i className="fa fa-caret-down"></i>
          </AccordionHeader>
          <AccordionBody className="menu-body">
            {menu.data.group_menu4.map((item, index) => (
              <div className="menu-item" key={index}>
                <a href="#">{item.submenu_name}</a>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
        <Accordion className="menu-header" open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            {menu.data.menu_name5} <i className="fa fa-caret-down"></i>
          </AccordionHeader>
          <AccordionBody className="menu-body">
            {menu.data.group_menu5.map((item, index) => (
              <div className="menu-item" key={index}>
                <a href="#">{item.submenu_name}</a>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
        <Accordion className="menu-header" open={open === 6}>
          <AccordionHeader onClick={() => handleOpen(6)}>
            {menu.data.menu_name6} <i className="fa fa-caret-down"></i>
          </AccordionHeader>
          <AccordionBody className="menu-body">
            {menu.data.group_menu6.map((item, index) => (
              <div className="menu-item" key={index}>
                <a href="#">{item.submenu_name}</a>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      </div>
      <div className={`menu-backdrop ${openMobileMenu ? 'open' : ''}`}></div>
      <Bounded as="header">
        <div className="container-content full header">
          <div className="content">
            <PrismicNextLink href="/" className="logo-text">
              <PrismicText field={settings.data.siteTitle} />
            </PrismicNextLink>
            <div>
              <button className="menu-hamburger" onClick={handleOpenMobileMenu}>
                <i className="fa fa-bars"></i>
              </button>
              <div className="menu-desktop">
                <Menu>
                  <MenuHandler>
                    <Button className="menu-button">
                      {menu.data.menu_name} <i className="fa fa-caret-down"></i>
                    </Button>
                  </MenuHandler>
                  <MenuList className="menu-list">
                    {menu.data.group_menu.map((item, index) => (
                      <MenuItem className="menu-item" key={index}>
                        <PrismicNextLink field={item.submenu_link}>
                          {item.submenu_name}
                        </PrismicNextLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button className="menu-button">
                      {menu.data.menu_name2} <i className="fa fa-caret-down"></i>
                    </Button>
                  </MenuHandler>
                  <MenuList className="menu-list">
                    {menu.data.group_menu2.map((item, index) => (
                      <MenuItem className="menu-item" key={index}>
                        <PrismicNextLink field={item.submenu_link}>
                          {item.submenu_name}
                        </PrismicNextLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button className="menu-button">
                      {menu.data.menu_name3} <i className="fa fa-caret-down"></i>
                    </Button>
                  </MenuHandler>
                  <MenuList className="menu-list">
                    {menu.data.group_menu3.map((item, index) => (
                      <MenuItem className="menu-item" key={index}>
                        <PrismicNextLink field={item.submenu_link}>
                          {item.submenu_name}
                        </PrismicNextLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button className="menu-button">
                      {menu.data.menu_name4} <i className="fa fa-caret-down"></i>
                    </Button>
                  </MenuHandler>
                  <MenuList className="menu-list">
                    {menu.data.group_menu4.map((item, index) => (
                      <MenuItem className="menu-item" key={index}>
                        <PrismicNextLink field={item.submenu_link}>
                          {item.submenu_name}
                        </PrismicNextLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button className="menu-button">
                      {menu.data.menu_name5} <i className="fa fa-caret-down"></i>
                    </Button>
                  </MenuHandler>
                  <MenuList className="menu-list">
                    {menu.data.group_menu5.map((item, index) => (
                      <MenuItem className="menu-item" key={index}>
                        <PrismicNextLink field={item.submenu_link}>
                          {item.submenu_name}
                        </PrismicNextLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button className="menu-button">
                      {menu.data.menu_name6} <i className="fa fa-caret-down"></i>
                    </Button>
                  </MenuHandler>
                  <MenuList className="menu-list">
                    {menu.data.group_menu6.map((item, index) => (
                      <MenuItem className="menu-item" key={index}>
                        <PrismicNextLink field={item.submenu_link}>
                          {item.submenu_name}
                        </PrismicNextLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </div>
            </div> 
          </div>
        </div>
      </Bounded>
    </>
  );
}

Header.propTypes = {
  menu: PropTypes.string,
  settings: PropTypes.string,
};
