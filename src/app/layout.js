"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        {/* @ts-expect-error Async Server Component */}
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
    </html>
  );
}

// export const metadata = {
//   metadataBase: new URL("https://thaipfa.com"),
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     images: "/og-image.png",
//   },
// };

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const menu = await client.getSingle("menu");
  

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
                <Button className="menu-button">{menu.data.menu_name} <i className="fa fa-caret-down"></i></Button>
              </MenuHandler>
              <MenuList className="menu-list">
                {menu.data.group_menu.map((item, index) => (
                  <MenuItem className="menu-item" key={index}>
                    <PrismicLink field={item.submenu_link}>
                      {item.submenu_name}
                    </PrismicLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button className="menu-button">{menu.data.menu_name2} <i className="fa fa-caret-down"></i></Button>
              </MenuHandler>
              <MenuList className="menu-list">
                {menu.data.group_menu2.map((item, index) => (
                  <MenuItem className="menu-item" key={index}>
                    <PrismicLink field={item.submenu_link}>
                      {item.submenu_name}
                    </PrismicLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button className="menu-button">{menu.data.menu_name3} <i className="fa fa-caret-down"></i></Button>
              </MenuHandler>
              <MenuList className="menu-list">
                {menu.data.group_menu3.map((item, index) => (
                  <MenuItem className="menu-item" key={index}>
                    <PrismicLink field={item.submenu_link}>
                      {item.submenu_name}
                    </PrismicLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button className="menu-button">{menu.data.menu_name4} <i className="fa fa-caret-down"></i></Button>
              </MenuHandler>
              <MenuList className="menu-list">
                {menu.data.group_menu4.map((item, index) => (
                  <MenuItem className="menu-item" key={index}>
                    <PrismicLink field={item.submenu_link}>
                      {item.submenu_name}
                    </PrismicLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button className="menu-button">{menu.data.menu_name5} <i className="fa fa-caret-down"></i></Button>
              </MenuHandler>
              <MenuList className="menu-list">
                {menu.data.group_menu5.map((item, index) => (
                  <MenuItem className="menu-item" key={index}>
                    <PrismicLink field={item.submenu_link}>
                      {item.submenu_name}
                    </PrismicLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button className="menu-button">{menu.data.menu_name6} <i className="fa fa-caret-down"></i></Button>
              </MenuHandler>
              <MenuList className="menu-list">
                {menu.data.group_menu6.map((item, index) => (
                  <MenuItem className="menu-item" key={index}>
                    <PrismicLink field={item.submenu_link}>
                      {item.submenu_name}
                    </PrismicLink>
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

async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const data = footer.data;

  const contactTitle = data.contact_title;
  const companyNameEng = data.company_name_eng;
  const companyNameThai = data.company_name_thai;
  const companyAddress = data.company_address;
  const email = data.email;
  const telephone = data.telephone;
  const fax = data.fax;
  const subscribeName = data.subscribe_name;
  const subscribePlaceholder = data.subscribe_placeholder;
  const subscribeButtonName = data.subscribe_button_name;
  const our_services = data.our_services;

  return (
    <div className="footer">
      <div className="background-darkgrey">
        <div className="container-content py-[35px]">
          <div className="content">
            <div className="content-left">
              <p>
                {contactTitle}
                <br />
                {companyNameEng}
                <br />
                {companyNameThai}
                <br />
                {companyAddress}
                <br />
                {email}
                <br />
                {telephone}
                <br />
                {email}
                <br />
                {fax}
              </p>
            </div>
            <div className="content-center">
              <h3>Our Services</h3>
              <ul className="link-service">
                {our_services.map((item) => (
                  <li key={prismic.asText(item.label)}>
                    <PrismicNextLink
                      key={item}
                      href={item.service_link.url}
                      target={item.service_link.target}
                    >
                      {item.service_name}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="content-right">
              <h3>{subscribeName}</h3>
              <input
                type="text"
                name=""
                placeholder={subscribePlaceholder}
                className="input-email"
              />
              <button className="block btn-primary mt-[15px]">
                {subscribeButtonName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        Copyright &copy; 2024 Thai Professional Finance Academy (ThaiPFA) All
        Rights Reserved
      </div>
    </div>
  );
}
