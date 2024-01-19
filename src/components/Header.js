"use client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import PropTypes from "prop-types";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Bounded } from "./Bounded";

export function Header({ menu, settings }) {
  return (
    <Bounded as="header">
      <div className="container-content full header">
        <div className="content">
          <PrismicNextLink href="/" className="logo-text">
            <PrismicText field={settings.data.siteTitle} />
          </PrismicNextLink>
          <div>
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
    </Bounded>
  );
}

Header.propTypes = {
  menu: PropTypes.string,
  settings: PropTypes.string,
};
